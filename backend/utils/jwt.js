'use strict';
const jwt = require('jsonwebtoken');

const secret = 'topSecret';

exports.genTokens = (user_id, user_email) => {
  const token = jwt.sign(
    {
      user_id,
      user_email,
    },
    secret,
    { expiresIn: '1h' }
  );
    
    return token;
};
