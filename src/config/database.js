const mysql = require('mysql2');
require('dotenv').config; //cấu hình dotenv cho port cấu hình

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
  });
  
module.exports = connection;