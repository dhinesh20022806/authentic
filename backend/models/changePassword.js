'use strict';

const pool = require("../config/database");
const { isPasswordMatch, hash } = require("../utils/bcrypt");


exports.updatePassword = async (email, oldPlainTextPassword, newPassword) => {
    
    const query = {
        text: `SELECT email, password_hash FROM users WHERE email = $1`,
        values:[email]
    }

    const res = await pool.query(query);

   
    const oldHashPassword = res.rows[0]['password_hash']
   
    try {
        const isChangePassword = await isPasswordMatch(
          oldPlainTextPassword,
          oldHashPassword
        );
    } catch (error) {
        throw new Error("incorrect password")
    }
   
    if (isChangePassword) {
        const hashNewPassword = await hash(newPassword);
     

        const query = {
            text: `UPDATE users SET password_hash = $1 WHERE email = $2 ;`,
            values:[hashNewPassword, email]
        }
        await pool.query(query);
       
    }




}