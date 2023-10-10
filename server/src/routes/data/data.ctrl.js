"user strict";

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("../../../src/config/logger");
const index = require("../../../src/routes/home/index");
const app = express();
// app.use(express.json()); // JSON 데이터 파싱을 위한 미들웨어
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const uuidAPIKey = require("uuid-apikey");

// console.log(uuidAPIKey.create());    // API 키 발급
/*
{
  apiKey: 'KGYR6E2-FWZM1M4-JV5Z5H4-HR2W829',
  uuid: '9c3d8338-7f3f-40d0-96cb-f2c48e05c409'
}
*/
const key = {
  apiKey: "KGYR6E2-FWZM1M4-JV5Z5H4-HR2W829",
  uuid: "9c3d8338-7f3f-40d0-96cb-f2c48e05c409",
};
// get mapping
const output = {
  users: (req, res) => {
    logger.info(`GET / 304 "api 화면으로 이동"`);
    let { apikey, type } = req.params;

    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
      res.send("apikey is not valid.");
    } else {
      if (type == "seoul") {
        let data = [
          {
            name: "홍길동",
            city: "seoul",
          },
          {
            name: "김철수",
            city: "seoul",
          },
        ];
        res.send(data);
      } else if (type == "jeju") {
        let data = [
          {
            name: "손흥민",
            city: "jeju",
          },
          {
            name: "박지성",
            city: "jeju",
          },
        ];
        res.send(data);
      } else {
        res.send("Type is not correct.");
      }
      // res.render("data");
    }
  },
  sales: (req, res) => {
    logger.info(`GET / 304 "api 화면으로 이동"`);
    let { apikey, year } = req.params;

    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
      res.send("apikey is not valid.");
    } else {
      if (year == "2019") {
        let data = [
          {
            product: "반도체",
            amount: 3213213,
          },
          {
            product: "냉장고",
            amount: 123223,
          },
        ];
        res.send(data);
      } else if (year == "2020") {
        let data = [
          {
            product: "반도체",
            amount: 321322312313,
          },
          {
            product: "냉장고",
            amount: 123223123123,
          },
        ];
        res.send(data);
      } else {
        res.send("Type is not correct.");
      }
      // res.render("data");
    }
  },
};

const process = {
  users: (req, res) => {
    // const data = JSON.parse(req);
    // const json = res.json;
    // console.log("data  : " + data);
    // console.log("res : " + res);
    // res.json({ message: "데이터를 받음" });

    console.log(req.body);
    logger.info(`POST / 304 "api 화면으로 이동"`);
    let { apikey, type } = req.params;

    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
      res.send("apikey is not valid.");
    } else {
      if (!req.body) {
        return res.status(400).json({ error: "Invalid request body" });
      }
      //   res.render("data");   // 페이지 렌더
      //   console.log(req.params); // 파라미터 값 가져옴
      const { name, level } = req.body;
      console.log(`Received name: ${name}, level: ${level}`);
      res.send("Received data");
    }
  },
};

module.exports = {
  output,
  process,
};
