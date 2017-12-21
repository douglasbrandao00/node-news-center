const connectionMySQL = function () {
  const mysql = require('mysql');
  
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'brandao00',
    database: 'portal_noticias'
  });
}

module.exports = () => {
  return connectionMySQL;
}
