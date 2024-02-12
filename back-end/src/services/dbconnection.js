const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createPool({
  host: process.env.DATABASE_URL,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 10, 
  waitForConnections: true,
  
});

async function abrirConexao(){
  const con = await connection.getConnection();
  return con;
}


module.exports =   {
  abrirConexao,
};