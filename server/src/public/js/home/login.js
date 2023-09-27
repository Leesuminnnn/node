"use strict";

const id = document.querySelector("#id"), 
    password = document.querySelector("#pwd"),
    loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password : password.value,
    };

    // console.log(req);
    console.log(JSON.stringify(req));

    fetch('/login',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
      
        // object를 문자열로 바꿔주어 JSON 형태로 만들어준다
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
      });
}
