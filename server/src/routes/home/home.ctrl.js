"use strict";

const output = {
     home: (req, res) => {
        res.render("index");
    },    
    login:  (req, res) => {
        res.render("login");
    },
};

const process = {
    login: (req, res) => {
        console.log("서버");
        console.log(req.body);
        // 여기에서 데이터를 처리하고 응답을 보낼 수 있습니다.
        // 예를 들어, 데이터베이스에서 사용자를 검색하고 인증 절차를 수행할 수 있습니다.

        // 예시: 응답을 JSON 형태로 클라이언트에게 보내기
        const responseData = {
            message: "로그인 요청을 성공적으로 받았습니다.",
            receivedData: req.body,
        };
        res.json(responseData);

        console.log(responseData);
    },
};

module.exports  = {
    output,
    process,
};