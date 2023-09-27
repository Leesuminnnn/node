"use strict";

const id = document.querySelector("#id"), 
    name = document.querySelector("#name"),
    password = document.querySelector("#pwd"),
    confirmpassword = document.querySelector("#confirm-pwd"),
    registerButton = document.querySelector("#button");
registerButton.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해 주세요.");
    if (password.value !== confirmpassword.value) return alert("비밀번호가 일치하지 않습니다.");
    

    const req = {
        id : id.value, 
        name : name.value,
        password : password.value,
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
