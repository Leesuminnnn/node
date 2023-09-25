"use strict";

var path = require('path');
const express = require("express");
const app = express();
const router = express.Router();
// 앱 세팅
app.set('views', path.join(__dirname, '/routes'));
app.set('view engine', 'ejs');


module.exports = router;