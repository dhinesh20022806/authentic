'use strict';

exports.getSignup = (req, res) => {
  res.end('<h1>Signup</h1>');
};

exports.postSignup = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.end("<h1>received</h1>")
}
