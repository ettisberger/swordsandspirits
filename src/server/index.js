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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../dist/index.html'));
});

app.post('/api/tickets/send', function (req, res) {
    let ticketData = req.body.ticketData;

    let transporter = nodeMailer.createTransport(mailConfig);

    let orderMail = {
        from: ticketData.firstName + " " + ticketData.lastName + ' <' + ticketData.email +'>', // sender address, doesnt work with gmail, will be replaced by the logged in email
        to: config.MAIL.USER,
        subject: 'Bestellung',
        text: "Absender:" + ticketData.firstName + " " + ticketData.lastName + "[" + ticketData.email + "]\n" +
            "\n\nAdresse:\n" + ticketData.street + " " + ticketData.streetNr + ", " + ticketData.zip + " " + ticketData.city +
            "\n\nTelefon/Handy:\n" + ticketData.phone +
            "\n\nTickets Erwachsene:\n" + ticketData.ticketsAdults +
            "\n\nTickets Kinder:\n" + ticketData.ticketsKids +
            "\n\nVersand:\n" + ticketData.print +
            "\n\nBezahlung:\n" + ticketData.payment +
            "\n\nVorstellung:\n" + ticketData.showDate +
            "\n\nNachricht:\n" + ticketData.message
    };

    let customerMail = {
        from: config.MAIL.USER, // sender address, doesnt work with gmail, will be replaced by the logged in email
        to: ticketData.email,
        subject: 'Bestätigung Swords and Spirits 2019',
        text: "Vielen Dank für die Bestellung. Wir haben diese erhalten und werden sie so schnell als möglich bearbeiten.\n\n" +
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

    let transporter = nodeMailer.createTransport(mailConfig);

    let mailOptions = {
        from: contactData.firstName + " " + contactData.lastName + ' <' + contactData.email +'>', // sender address, doesnt work with gmail, will be replaced by the logged in email
        to: config.MAIL.USER,
        subject: 'Kontaktaufnahme',
        text: "Absender:" + contactData.firstName + " " + contactData.lastName + "[" + contactData.email + "]\n\nNachricht:\n" + contactData.message,
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