"use strict";

const id = document.querySelector("#id"),
    pwd = document.querySelector("#pwd"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pwd: pwd.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    });

}