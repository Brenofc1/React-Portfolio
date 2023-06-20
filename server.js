const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure Express to parse JSON data
app.use(express.json());

// Set up SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Define the API endpoint for handling form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, mobile, message } = req.body;

  // Create the email message
  const msg = {
    to: 'brenocampos22@yahoo.com.br', // Enter your recipient email address
    from: process.env.YAHOO_EMAIL, // Use your own email address here
    subject: 'New Contact Form Submission from Breno Campos Portfolio',
    text: `
      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Message: ${message}
    `,
  };

  // Send the email
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set the static folder
  app.use(express.static('client/build'));

  // Serve the index.html file if route not recognized
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
