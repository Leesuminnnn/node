const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "csworktools.cofkawjnfase.ap-northeast-2.rds.amazonaws.com",
  charset: "utf8mb4",
  port: "3306",
  user: "admin",
  password: "cs12365478!!",
  database: "csworktools",
  connectionLimit: 10, // Adjust as needed
  multipleStatements: true,
  // typeCast: function (field, next) {   // 해당 코드 주석풀면 한글 깨짐!!
  //     if (field.type == 'VAR_STRING') {
  //         return field.string();
  //     }
  //     return next();
  // }
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

module.exports = db;
