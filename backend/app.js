'use strict';
const express = require('express');
const logger = require('morgan');

const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login');
const changePasswordRouter = require('./routers/changePassword');
const forgetPasswordRouter = require('./routers/forgetPassword');

const { authMiddleWare } = require('./utils/authMiddleware');

const app = express();

app.use(express.json());

app.use(logger('dev'));

app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.use('/forget_password', forgetPasswordRouter);

app.use(authMiddleWare);
app.use(changePasswordRouter);

module.exports = app;
