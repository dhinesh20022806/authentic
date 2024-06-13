'use strict';

const { updatePassword } = require('../models/changePassword');
const { verifyTokens } = require('../utils/jwt');

exports.changePassword = async (req, res) => {
  const { password, newPassword } = req.body;

  const authFragment = req.headers.authorization.split(' ');
  const userToken = authFragment[1];

  const { user_email: email } = verifyTokens(userToken);

  console.log(email);

  try {
    const result = await updatePassword(email, password, newPassword);

    res.status(200).json({
      status: 'success',
      data: 'Password was successfully changed',
    });
  } catch (error) {
    res.status(404).json({
      status: 'failure',
      error: error.message,
    });
  }
};
