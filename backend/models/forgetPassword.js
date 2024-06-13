'use strict';

const pool = require('../config/database');

exports.setOTP = async (email, otp, otpExp) => {
  try {
    const query = {
      text: `UPDATE users SET otp = $1, otp_expires = $2 WHERE email = $3 `,
      values: [otp, otpExp, email],
    };

    await pool.query(query);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

exports.verifyOTP = async otp => {
  try {
    const query = {
      text: `SELECT * FROM users WHERE otp = $1 AND otp_expires > NOW()  `,
      values: [otp],
    };

    const res = await pool.query(query);
    if (res.rows[0] === undefined) throw 'invalid otp';
  } catch (error) {
    console.log(error, 'error test');
    throw new Error(error);
  }
};
