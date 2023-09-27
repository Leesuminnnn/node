"use strict";

const id = document.querySelector("#id"), 
    name = document.querySelector("#name"),
    password = document.querySelector("#pwd"),
    confirmpassword = document.querySelector("#confirm-pwd"),
    registerButton = document.querySelector("#button");
registerButton.addEventListener("click", register);

function register() {
    const req = {
        id : id.value, 
        name : name.value,
        password : password.value,
        confirmpassword: confirmpassword.value
    };

    // console.log(req);
    console.log(JSON.stringify(req));

    fetch('/register',{
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
            location.href = "/login";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
      });
}
