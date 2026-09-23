const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha123',
  database: 'crud_livros',
  charset: 'utf8mb4'
});


module.exports = pool;