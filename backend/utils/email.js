'use strict';
const nodemailer = require('nodemailer');

exports.sendEmail = async (email,otp,message) =>{
  try {
    const transport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'dhinesh20022806@gmail.com',
        pass: process.env.APP_SPECIFIC_PASSWORD, // Ensure this environment variable is set
      },
    });

    const mailOptions = {
      from: 'dhinesh20022806@gmail.com',
      to: 'dhineshananthakumar.a8@gmail.com',
      subject: 'Testing Nodemailer',
      text: "That's so simple, not too hard",
    };

    const info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log('Error occurred:', error.message);
  }
}

