const express = require('express');

const { forgetPassword } = require('../controllers/forgetPassword');
const { verifyOTP } = require('../models/forgetPassword');
const { isValidOTP } = require('../controllers/forgetPassword');

const router = express.Router();

router.route('/').post(forgetPassword);
router.route('/otp').post(isValidOTP);
module.exports = router;
