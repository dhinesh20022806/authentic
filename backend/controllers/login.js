'use strict';

const { validUser } = require('../models/login');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const getUser = await validUser(email, password);

    const token = await genTokens(getUser.id, getUser.email);
    const data = {
      username: getUser.username,
      token,
    };

    res.status(200).json({ status: 'success', data });
  } catch (error) {
    res.status(401).json({ status: 'failure', data: error.message });
  }
};
