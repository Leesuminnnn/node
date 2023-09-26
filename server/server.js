"use strict";

// 모듈
const express = require('express');
const app = express();
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
const logger = require('morgan'); // morgan 미들웨어 가져오기

// 라우팅
const test = require('./src/routes/test');

app.use('/', test);
app.use(cors());
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended: true}));



// maria DB connet
const maria = require('./database/connect/maria');
maria.connect();

// view engine setup
app.set('views', `${__dirname}\\src\\views`);
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(cookieParser());



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
