const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const fs = require('fs');

let config;

if (fs.existsSync('./src/config/secret.config.json')) {
    console.log("found secret config");
    config = require('../config/secret.config.json');
}

if (process.env.NODE_ENV === 'production') {
    if(!config){
        console.log("no secret config, read process.env");

        config = {
            "MAIL": {
                "USER": process.env.MAIL_USER,
                "PW": process.env.MAIL_PW,
                "SMTP": process.env.MAIL_SMTP,
                "PORT": process.env.MAIL_PORT
            },
            "USE_SSL": process.env.USE_SSL,
            "APP": {
                "TITLE": process.env.APP_TITLE,
                "BASE_URL": process.env.BASE_URL
            }
        }
    }
} else {
    if(!config){
        config = require('../config/local.config.json');
    }
}

const app = express();
app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('server listening on port 3000');
});

app.use('*', (req, res, next) => {
    if (config.USE_SSL && req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(`https://${req.hostname}${req.url}`);
    } else {
        next();
    }
});

const mailConfig = {
    host: config.MAIL.SMTP,
    port: config.MAIL.PORT,
    secure: true, // use TLS
    auth: {
        user: config.MAIL.USER,
        pass: config.MAIL.PW
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
};

app.use('/', express.static('dist/'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.post('/api/tickets/send', function (req, res) {
    let ticketData = req.body.ticketData;

    if(!ticketData.email){
        res.json({'status': 'fail'});
    }
    let transporter = nodeMailer.createTransport(mailConfig);

    let orderMail = {
        from: ticketData.firstName.value + " " + ticketData.lastName.value + ' <' + ticketData.email.value +'>', // sender address, doesnt work with gmail, will be replaced by the logged in email
        to: config.MAIL.USER,
        subject: 'Bestellung',
        text: "Absender:" + ticketData.firstName.value + " " + ticketData.lastName.value + "[" + ticketData.email.value + "]\n" +
            "\n\nAdresse:\n" + ticketData.street.value + " " + ticketData.streetNr.value + ", " + ticketData.zip.value + " " + ticketData.city.value +
            "\n\nTelefon/Handy:\n" + ticketData.phone.value +
            "\n\nTickets Erwachsene:\n" + ticketData.ticketsAdults.value +
            "\n\nTickets Kinder:\n" + ticketData.ticketsKids.value +
            "\n\nVersand:\n" + ticketData.print.value +
            "\n\nVorstellung:\n" + ticketData.showDate.value +
            "\n\nBemerkung:\n" + ticketData.message.value
    };

    let customerMail = {
        from: config.MAIL.USER, // sender address, doesnt work with gmail, will be replaced by the logged in email
        to: ticketData.email.value,
        subject: 'Bestätigung Swords and Spirits 2019',
        text: "Vielen Dank für Ihre Bestellung, wir haben die Tickets für den gewünschten Tag auf ihren Namen reserviert. Bitte holen Sie diese gegen Barzahlung an der Abendkasse ab (Abendkasse Samstag ab 18.30, Sonntag ab 13 Uhr geöffnet).\n\n" +
        "Swords and Spirits"
    };

    transporter.sendMail(orderMail, (error, info) => {
        if (error) {
            console.log(error);
            res.json({'status': 'fail'});
        }

        transporter.sendMail(customerMail, (error, info) => {
            if (error) {
                console.log(error);
                res.json({'status': 'fail'});
            }

            res.json({'status': 'success'});
        });
    });
});

app.post('/api/contact/send', function (req, res) {
    let contactData = req.body.contactData;

    if(!contactData.email){
        res.json({'status': 'fail'});
    }

    let transporter = nodeMailer.createTransport(mailConfig);

    let mailOptions = {
        from: contactData.firstName.value + " " + contactData.lastName.value + ' <' + contactData.email.value +'>', // sender address, doesnt work with gmail, will be replaced by the logged in email
        to: config.MAIL.USER,
        subject: 'Kontaktaufnahme',
        text: "Absender:" + contactData.firstName.value + " " + contactData.lastName.value + "[" + contactData.email.value + "]\n\nNachricht:\n" + contactData.message.value,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({'status': 'fail'});
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.json({'status': 'success'});
    });
});