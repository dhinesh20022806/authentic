'use strict';
// TODO: import necessary packages for send email with otp 
// 
const nodemailer = require('nodemailer');
const { sendEmail } = require('../utils/email');

exports.forgetPassword = async (req, res) => {
    await sendEmail();
    res.json({status:"building"})
}