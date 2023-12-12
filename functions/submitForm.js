// submitForm.js

const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'randomveev@gmail.com', // replace with your email
        pass: 'random123', // replace with your email password or an app-specific password
      },
    });

    // Setup email data
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'randomveev@gmail.com', // replace with your email
      subject: 'New Form Submission',
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!', info }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error }),
    };
  }
};
