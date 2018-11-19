const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const fs = require('fs');

let config = require('../config/secret.config.json');

if(!config){
    config = require('../config/local.config.json');
}

const app = express();
app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('server listening on port 3000');
});

// if we wanna do rest only
app.use('/', express.static('dist/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.post('/tickets/send', function (req, res) {

});

app.post('/contact/send', function (req, res) {
    let contactData = req.body.contactData;

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.GMAIL.USER,
            pass: config.GMAIL.PW
        }
    });

    let mailOptions = {
        from: contactData.firstName + contactData.name + ' <' + contactData.email +'>', // sender address
        to: 'ettisberger@gmail.com', // list of receivers
        subject: 'Kontaktaufnahme', // Subject line
        text: contactData.message, // plain text body
        html: contactData.message  // html body
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