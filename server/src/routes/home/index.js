const express = require("express");
const app = express();
const router = express.Router();
const db = require("../../../database/connect/maria");
const ctrl = require("./home.ctrl");
const ctrl2 = require("../data/data.ctrl");
var cors = require("cors");

function formatDateTime(dateTime) {
  const date = dateTime.toISOString().split("T")[0];
  const time = dateTime.toTimeString().split(" ")[0];
  return `${date} ${time}`;
}

app.use(cors());
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/apidata/users/:apikey/:type", ctrl2.output.users);
router.get("/apidata/sales/:apikey/:year", ctrl2.output.sales);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

router.get("/select", function (req, res) {
  db.query(
    "SELECT " +
      "CAST(m_id AS CHAR) AS m_id, " +
      "CAST(m_delyn AS CHAR) AS m_delyn, " +
      "CAST(m_name AS CHAR) AS m_name, " +
      "CAST(m_pw AS CHAR) AS m_pw, " +
      "CAST(m_email AS CHAR) AS m_email, " +
      "CAST(m_status AS CHAR) AS m_status, " +
      "CAST(m_point AS CHAR) AS m_point, " +
      "CAST(m_no AS CHAR) AS m_no, " +
      "CAST(m_in AS CHAR) AS m_in, " +
      "CAST(m_de AS CHAR) AS m_de, " +
      "m_regdate " +
      "FROM customer",
    function (err, rows, fields) {
      if (!err) {
        // 결과를 문자열로 변환
        const results = rows.map((row) => ({
          // 문자열로 변환하기 전에 해당 컬럼이 null인지 확인
          // 만약 해당 컬럼이 null이라면 문자열로 반환하지 않고 그대로 null을 유지
          m_id: row.m_id ? row.m_id.toString() : null,
          m_pw: row.m_pw ? row.m_pw.toString() : null,
          m_name: row.m_name ? row.m_name.toString() : null,
          m_email: row.m_email ? row.m_email.toString() : null,
          m_delyn: row.m_delyn ? row.m_delyn.toString() : null,
          m_status: row.m_status ? row.m_status.toString() : null,
          m_point: row.m_point ? row.m_point.toString() : null,
          m_no: row.m_no ? row.m_no.toString() : null,
          m_in: row.m_in ? row.m_in.toString() : null,
          m_de: row.m_de ? row.m_de.toString() : null,
          m_regdate: row.m_regdate ? formatDateTime(row.m_regdate) : null, // 날짜 포맷 변경
        }));
        console.log(results);
        res.json(results);
      } else {
        console.log("err : " + err);
        res.send(err); // response send err
      }
    }
  );
});

router.get("/datas", function (req, res) {
  db.query(
    "select " +
      "CAST(m_id AS CHAR) AS m_id, " +
      "CAST(m_pw AS CHAR) AS m_pw, " +
      "CAST(m_name AS CHAR) AS m_name " +
      "from customer",
    function (err, rows, fields) {
      if (!err) {
        // 결과를 문자열로 변환
        const results = rows.map((row) => ({
          // 문자열로 변환하기 전에 해당 컬럼이 null인지 확인
          // 만약 해당 컬럼이 null이라면 문자열로 반환하지 않고 그대로 null을 유지
          m_id: row.m_id ? row.m_id.toString() : null,
          m_pw: row.m_pw ? row.m_pw.toString() : null,
          m_name: row.m_name ? row.m_name.toString() : null,
        }));
        console.log(results);
        res.json(results); // 응답 객체에 json형식으로 데이터를 보내야함
      } else {
        console.log("err : " + err);
        res.send(err); // response send err
      }
    }
  );
});

router.get("/data2", function (req, res) {
  db.query(
    "select " + "id, " + "password, " + "name " + "from users",
    function (err, rows, fields) {
      if (!err) {
        // 결과를 문자열로 변환
        const results = rows.map((row) => ({
          // 문자열로 변환하기 전에 해당 컬럼이 null인지 확인
          // 만약 해당 컬럼이 null이라면 문자열로 반환하지 않고 그대로 null을 유지
          id: row.id ? row.id.toString() : null,
          password: row.password ? row.password.toString() : null,
          name: row.name ? row.name.toString() : null,
        }));
        console.log(results);
        res.send(results); // 응답 객체에 json형식으로 데이터를 보내야함
      } else {
        console.log("err : " + err);
        res.send(err); // response send err
      }
    }
  );
});
module.exports = router;
