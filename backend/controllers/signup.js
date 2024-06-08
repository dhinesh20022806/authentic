'use strict';
const { getAllUser, createUser } = require('../models/signup');
const { genTokens } = require('../utils/jwt');

exports.getSignup = async (req, res) => {
  const users = await getAllUser();
  res.status(200).json(users);
};

exports.postSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await createUser(username, email, password);

    const token = genTokens(user.id, user.email, user.username);

    res.status(201).json({
      status: 'success',
      data: {
        username: user.username,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    res.status(409).json({
      status: 'failure',
      data: error.message,
    });
  }
};
