'use strict';
const pool = require('../config/database');
const { isPasswordMatch } = require('../utils/bcrypt');

exports.validUser = async (email, password) => {
  const existUser = await getData(email, 'email');
  if (!existUser) {
    throw new Error('Email id is not found');
  }
  console.log(existUser);

  const isCorrectPassword = await isPasswordMatch(
    password,
    existUser.password_hash
  );
  if (!isCorrectPassword) throw new Error('incorrect password');

  return existUser;
};

const getData = async (columnName, columnValue) => {
  const query = {
    text: `SELECT * FROM users WHERE ${columnValue} = $1`,
    values: [columnName],
  };

  const res = await pool.query(query);

  return res.rows[0];
};
