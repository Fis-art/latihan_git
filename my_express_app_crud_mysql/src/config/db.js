const mysql = require("mysql2");
require('dotenv').config()

const connectionPool = mysql.createPool({
    host: process.env.DB.HOST,
    user: process.env.DB.USER,
    password: process.env.DB.PASSWORD,
    database: process.env.DB.DATABASE,
    port : process.env.DB.PORT,
});

connectionPool.getConnection(function(err) {
    if (err) {
        throw err;
    }
});

module.exports = connectionPool;

