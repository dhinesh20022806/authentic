'use strict';
const jwt = require('jsonwebtoken');

const secret = 'topSecret';

exports.genTokens = (user_id, user_email, user_name) => {
  const token = jwt.sign(
    {
      user_id,
      user_email,
      user_name,
    },
    secret,
    { expiresIn: '1h' }
  );

  return token;
};

exports.verifyTokens = (token) => {
  try {
    console.log(token, 'token are here');
    console.log(typeof token);
    let decode = jwt.verify(token, secret);
    console.log('decoding', decode);
    return decode;
  } catch (error) {
    throw new Error("invalid token");
    
  }

}