'use strict';
const express = require('express');
const logger = require('morgan');
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login');

const app = express();

app.use(express.json());

app.use(logger('dev'));

app.use(signupRouter);
app.use(loginRouter);

module.exports = app;
