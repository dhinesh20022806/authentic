'use strict';
const { hash } = require('../utils/bcrypt');
const pool = require('../config/database');

exports.getAllUser = async () => {
  const res = await pool.query('SELECT * FROM users;');
  return res.rows;
};

exports.createUser = async (username, email, password) => {
  const hashPassword = await hash(password);
  const query = {
    text: 'INSERT INTO users(username, email, password_hash) VALUES($1, $2, $3) RETURNING *;',
    values: [username, email, hashPassword],
  };

  const res = await pool.query(query);

  return res.rows[0];
};
