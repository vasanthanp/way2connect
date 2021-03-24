const mysql = require('mysql');
require('dotenv').config();

const DB_CONFIG = {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
}
const DBCONNECTION = mysql.createConnection(DB_CONFIG);
module.exports = {DBCONNECTION}