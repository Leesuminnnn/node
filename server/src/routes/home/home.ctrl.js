"use strict";

const User = require("../../models/User");

const output = {
     home: (req,res) => {
        res.render("index");
    },    
    login:  (req,res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    }
};



const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
};
module.exports  = {
    output,
    process,
};