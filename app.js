var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var keys = require('./config/keys')

// MongoDB Connect
var mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);

mongoose.Promise = global.Promise;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Web
var indexRouter = require('./routes/indexRoutes');
var usersRouter = require('./routes/userRoutes');
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Api
var userApis = require('./routes/api/userRoutes')
app.use('/api/users', userApis);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
