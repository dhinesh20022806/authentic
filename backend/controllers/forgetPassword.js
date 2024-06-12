'use strict';
// TODO: import necessary packages for send email with otp 
// 
const { sendEmail } = require('../utils/email');
const { setOTP } = require('../models/forgetPassword');

exports.forgetPassword = async (req, res) => {
    const { email } = req.body;

    const otp = Math.floor(10_000 + Math.random() * 900_000);
    const otpExp = new Date();
    otpExp.setMinutes(otpExp.getMinutes() + 1);
    console.log(otpExp);

    const mailConfig = {
        email,
        subject: `OTP FOR FORGET PASSWORD`,
        message:`Your OTP expired after 1 min ${otp}`
    }
    try {
        await sendEmail(mailConfig);
        await setOTP(email, otp, otpExp);
        res.status(200).json({ status: 'success', data:"otp send your email" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'failure',
            data:error.message,
        })
    }
}