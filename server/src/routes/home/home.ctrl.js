"use strict";
const logger = require("../../../src/config/logger");
const User = require("../../models/User");
const express = require("express");
const app = express();
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("index");
  },

  login: (req, res) => {
    logger.info(`GET /login 304 "로그인 화면으로 이동"`);
    res.render("login");
  },

  register: (req, res) => {
    logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
    res.render("register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    const response = await user.login();
    const resjson = JSON.stringify(response);
    console.log("response : " + response);
    console.log("resjson : " + resjson);
    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    console.log("ctrl response : " + response);
    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 500 : 201,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },
};
module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.staus} Response : ${response.success}, ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.staus} Response : ${response.success}, ${
        response.msg || ""
      }`
    );
  }
};
