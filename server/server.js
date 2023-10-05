"use strict";

// 모듈
const express = require('express');
var cors = require('cors');
var path = require('path');
//import dotenv from "dotenv";
const dotenv = require("dotenv");
const morgan = require("morgan");
const logger = require("./src/config/logger")

const app = express();
dotenv.config();
// console.log(process.env.PORT);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_DATABASE);

// 라우팅
const home = require('./src/routes/home');


// view engine setup
app.set('views', path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(morgan("tiny", { stream: logger.stream }));

app.use('/', home);   // use -> 미들 웨어를 등록해주는 메서드
// maria DB connet
const maria = require('./database/connect/maria');
maria.connect();



module.exports = app;
