const express = require('express');
const router = express.Router();
const db = require('../database/connect/maria');

function formatDateTime(dateTime) {
  const date = dateTime.toISOString().split('T')[0];
  const time = dateTime.toTimeString().split(' ')[0];
  return `${date} ${time}`;
}

router.get("/", (req, res) => {
    res.send({test : "hi"});
});

router.get('/select', function(req, res) {
    db.query('SELECT ' +
    'CAST(m_id AS CHAR) AS m_id, ' +
    'CAST(m_delyn AS CHAR) AS m_delyn, ' +
    'CAST(m_name AS CHAR) AS m_name, ' +
    'CAST(m_pw AS CHAR) AS m_pw, ' +
    'CAST(m_email AS CHAR) AS m_email, ' +
    'CAST(m_status AS CHAR) AS m_status, ' +
    'CAST(m_point AS CHAR) AS m_point, ' +
    'CAST(m_no AS CHAR) AS m_no, ' +
    'CAST(m_in AS CHAR) AS m_in, ' +
    'CAST(m_de AS CHAR) AS m_de, ' +
    'm_regdate ' +
    'FROM customer', function(err, rows, fields) {
        if(!err) {
          // 결과를 문자열로 변환
          const results = rows.map(row => ({
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
          res.send(results);
        } else {
          console.log("err : " + err);
          res.send(err);  // response send err
        }
    });
});

router.get("/data", function(req, res) {
  db.query('select ' +
  'CAST(m_id AS CHAR) AS id, ' +
  'CAST(m_pw AS CHAR) AS pw ' +
  'from customer', function(err, rows, fields) {

    if(!err) {
      // 결과를 문자열로 변환
      const results = rows.map(row => ({
        // 문자열로 변환하기 전에 해당 컬럼이 null인지 확인
        // 만약 해당 컬럼이 null이라면 문자열로 반환하지 않고 그대로 null을 유지
        m_id: row.m_id ? row.m_id.toString() : null,
        m_pw: row.m_pw ? row.m_pw.toString() : null,
      }));
      res.send(results);
    } else {
      console.log("err : " + err);
      res.send(err);  // response send err
    }
  });
});

module.exports = router;