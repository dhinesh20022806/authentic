'use strict';
const pool = require('../config/database');

exports.getAllUser = async () => {
    const res = await pool.query('SELECT * FROM users');
    return res.rows
}

exports.createUser = async (username, email, password) => {
    const res = await pool.query('INSERT INTO users(username, email, password)')
    
}