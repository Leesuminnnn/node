"use strict";
const logger = require("../../../src/config/logger")
const User = require("../../models/User");

const output = {
    home: (req,res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("index");
    },    
    login:  (req,res) => {
        logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("login");
    },
    register: (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
        res.render("register");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        console.log(response);
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
        console.log(response);
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 409 : 201,
        };
        log(response, url);
        return res.status(url.status).json(response);
    },

};
module.exports  = {
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
            `${url.method} ${url.path} ${url.staus} Response : ${response.success}, ${response.msg || ""}`
        );
    }
            
}