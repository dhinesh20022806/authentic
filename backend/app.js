'use strict';
const express = require('express');
const logger = require('morgan');
const signupRouter = require('./routers/signup');
const loginRouter = require('./routers/login');
const homeRouter = require('./routers/home');
const { authMiddleWare } = require('./utils/authMiddleware');
const { verifyTokens } = require('./utils/jwt');

const app = express();

app.use(express.json());

app.use(logger('dev'));

app.use( "/signup",signupRouter);
app.use('/login', loginRouter);

// app.use(authMiddleWare);
verifyTokens(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VyX2VtYWlsIjoibWVlbmFAZ21haWwuY29tIiwiaWF0IjoxNzE3ODMxNjkyLCJleHAiOjE3MTc4MzUyOTJ9.G2tsBB38vtdgp8utez_EaEkbx18dwqjU6s9U3PsrdbE'
);
// app.use(homeRouter)
module.exports = app;
