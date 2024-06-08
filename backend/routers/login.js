'use strict';

const express = require('express');
const { loginUser } = require('../controllers/login');

const router = express.Router();

router.route('/login').post(loginUser);

module.exports = router;
