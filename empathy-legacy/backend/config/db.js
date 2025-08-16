const mysql = require('mysql2/promise');
require('dotenv').config();

// Cria um "pool" de conexões, que é mais eficiente para gerenciar múltiplas conexões
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('Conexão com o banco de dados estabelecida com sucesso.');

// Exporta o pool para que possa ser usado em outros arquivos
module.exports = pool;