'use strict';

const pool = require("../config/database");
const { isPasswordMatch, hash } = require("../utils/bcrypt");

// TODO : get email from token
// connect with database
// if email and password are match, then change the password
// if not display the error

exports.updatePassword = async (email, password, newPassword) => {
    
    const query = {
        text: `SELECT email, password_hash FROM users WHERE email = $1`,
        values:[email]
    }

    const res = await pool.query(query);

    
    // verify password
    console.log(res.rows);
    const existPassword = res.rows[0]['password_hash']
    console.log(existPassword, 'old password');
    const isChangePassword = await isPasswordMatch(password, existPassword);
    console.log(isChangePassword);
    if (isChangePassword) {
        const hashNewPassword = await hash(newPassword);
        console.log(hashNewPassword, 'new password');

        const query = {
            text: `UPDATE users SET password_hash = $1 WHERE email = $2 RETURNING *;`,
            values:[hashNewPassword, email]
        }
        const updatePassword = await pool.query(query);
        console.log(updatePassword);

    }




}