'use strict';
const { getAllUser, createUser } = require('../models/signup');
const { genTokens } = require('../utils/jwt');

exports.getSignup = async (req, res) => {
  const users = await getAllUser();
  res.status(200).json(users);
};

exports.postSignup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await createUser(username, email, password)
  
  const token = genTokens(user.id, user.email);

  res.status(200).json({
    status: 'success',
    data: {
      username: user.username,
      email: user.email,
      token
    }
  })
  
  
}
