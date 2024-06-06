'use strict';
const { getAllUser } = require('../models/signup');

exports.getSignup = async (req, res) => {
  const users = await getAllUser();
  res.status(200).json(users);
};

exports.postSignup = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.end("<h1>received</h1>")
}
