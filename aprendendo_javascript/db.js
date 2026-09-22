const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha123',
  database: 'crud_livros'
});

module.exports = pool;