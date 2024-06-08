const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hash = async password => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

exports.isPasswordMatch = async (plainTextPassword, hashedPassword) =>
  await bcrypt.compare(plainTextPassword, hashedPassword);
