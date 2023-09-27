const maria = require('mysql2');

const conn = maria.createConnection({
    host: 'csworktools.cafe24.com',
    charset: 'utf8mb4',
    port: 3306,
    user: 'csworktools',
    password: 'cs12365478!@',
    database: 'csworktools',
    multipleStatements: true,
    typeCast: function (field, next) {
        if (field.type == 'VAR_STRING') {
            return field.string();
        }
        return next();
    }
});

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

module.exports = conn;