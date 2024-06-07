'use strict';
const { hash } = require('../utils/bcrypt');
const pool = require('../config/database');

exports.getAllUser = async () => {
  const res = await pool.query('SELECT * FROM users;');
  return res.rows;
};

exports.createUser = async (username, email, password) => {
  const existUserName = await isExist(username, 'username');
  if (existUserName) {
    throw new Error('username not available');
  }
  const existEmail = await isExist(email, 'email');
  if (existEmail) {
    throw new Error('Email Id already exist');
  }
  const hashPassword = await hash(password);
  const query = {
    text: 'INSERT INTO users(username, email, password_hash) VALUES($1, $2, $3) RETURNING *;',
    values: [username, email, hashPassword],
  };

  const res = await pool.query(query);

  return res.rows[0];
};

const isExist = async (columnName, column) => {
  const query = {
    text: `SELECT * FROM users WHERE ${column} = $1`,
    values: [columnName],
  };

  const res = await pool.query(query);

  return res.rows.length > 0;
};
