'use strict';
const express = require('express');
const logger = require('morgan');
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login');
const homeRouter = require('./routers/home');
const { authMiddleWare } = require('./utils/authMiddleware');


const app = express();

app.use(express.json());

app.use(logger('dev'));

app.use( "/signup",signupRouter);
app.use('/login', loginRouter);

app.use(authMiddleWare);

app.use(homeRouter)
module.exports = app;
