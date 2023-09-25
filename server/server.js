"use strict";

// 모듈
const express = require('express');
const app = express();
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
const logger = require('morgan'); // morgan 미들웨어 가져오기
const test = require('./routes/test');

// 라우팅
const home = require("./routes/home");
app.use('/', test);
app.use(cors());


// maria DB connet
const maria = require('./database/connect/maria');
maria.connect();

// view engine setup
app.set('views', path.join(__dirname, '/routes'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/", home);


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
