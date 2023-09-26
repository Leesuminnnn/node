"use strict";
const id = document.querySelector("#id"), 
      // #id: 태그에 id로 부여되어있는 값을 가져오라는 명령
    password = document.querySelector("#pwd"),
      // #password: 태그에 password로 부여되어있는 값을 가져오라는 명령
    loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    const request = {
        id : id.value,
        password : password.value,
    };

    // console.log(request);
    console.log(JSON.stringify(request));

    fetch('/login',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      
        // object를 문자열로 바꿔주어 JSON 형태로 만들어준다
      });
}
