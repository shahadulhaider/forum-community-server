const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const passport = require('passport');

require('dotenv').config();

const {
  checkAuthHeaderSetUser,
  checkAuthHeaderSetUserUnAuthorized,
  notFound,
  errorHandler
} = require('./middlewares');

const authRouter = require('./auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(checkAuthHeaderSetUser);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Forum Community API'
  });
});

app.use('/auth', authRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
