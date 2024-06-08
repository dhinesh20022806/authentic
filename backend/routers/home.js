'use strict';
const express = require('express');
const { getUserName } = require('../controllers/home');

const router = express.Router();

router.route('/home').get(getUserName)

module.exports = router