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

app.post('/send-email', function (req, res) {
    console.log(config.GMAIL);

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.GMAIL.USER,
            pass: config.GMAIL.PW
        }
    });
    let mailOptions = {
        from: '"Highland Dancing Basel" <info@swordsandspirits.ch>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>Test Email</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});