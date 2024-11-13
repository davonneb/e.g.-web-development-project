const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// handles form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // sending an email
    const transporter = nodemailer.createTransport({
        service: 'gmail',  
        auth: {
            user: 'davonneboyce@gmail.com',
            pass: '1049465Djb!'        
        }
    });

    const mailOptions = {
        from: 'davonneboyce@gmail.com',
        to: 'davonneboyce@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error occurred while sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Form submitted successfully!');
        }
    });
});

// To start the server
const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
