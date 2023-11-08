var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');


var indexRouter = require('../routes/index');
var apiRouter = require('../routes/api');
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
// May be of use for developing endpoints
// app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message
  });
});

module.exports = app