'use strict';
const express = require('express');
const { getSignup, postSignup } = require('../controllers/signup');

const router = express.Router();

router.route('/signup').get(getSignup).post(postSignup);

module.exports = router;
