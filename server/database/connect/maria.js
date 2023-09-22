const maria = require('mysql2');

const conn = maria.createConnection({
    host: 'csworktools.cafe24.com',
    port: 3306,
    user: 'csworktools',
    password: 'cs12365478!@',
    database: 'csworktools'
});

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

module.exports = conn;