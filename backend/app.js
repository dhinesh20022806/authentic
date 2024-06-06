'use strict';
const express = require('express');
const logger = require('morgan');
const signupRouter = require('./routers/signup')

const app = express();

app.use(express.json())

app.use(logger('common'));

app.use(signupRouter)



module.exports = app;
