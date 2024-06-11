'use strict';

const { validUser } = require('../models/login');
const { genTokens } = require('../utils/jwt');

exports.loginUser = async (req, res) => {
  console.log(req.headers.authorization);
  const { email, password } = req.body;

  try {
    const getUser = await validUser(email, password);

    const token = await genTokens(
      getUser.id,
      getUser.email,
      getUser.username
    );
    const data = {
      username: getUser.username,
      token,
    };

    res.status(200).json({ status: 'success', data });
  } catch (error) {
    res.status(401).json({ status: 'failure', data: error.message });
  }
};
