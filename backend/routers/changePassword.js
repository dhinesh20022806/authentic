const express = require('express');
const { changePassword } = require('../controllers/changePassword');

const router = express.Router()

router.route('/change_password').post(changePassword)


module.exports = router;