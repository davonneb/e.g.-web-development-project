const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 1111;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    
    if (name && email && message) {
        res.send('Form submitted successfully!');
    } else {
        res.status(400).send('All fields are required.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
