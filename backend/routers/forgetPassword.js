const express = require('express');

const { forgetPassword } = require('../controllers/forgetPassword');

const router = express.Router();

router.route('/forget_password').post(forgetPassword)

module.exports = router;