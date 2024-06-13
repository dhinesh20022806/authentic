'use strict';
const nodemailer = require('nodemailer');

exports.sendEmail = async ({email,message, subject}) =>{
  try {
    const transport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'dhinesh20022806@gmail.com',
        pass: process.env.APP_SPECIFIC_PASSWORD, // Ensure this environment variable is set
      },
    });

    const mailOptions = {
      from: 'dhinesh20022806cd@gmail.com',
      to: email,
      subject,
      text : message,
    };

    const info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log('Error occurred:', error.message);
  }
}

