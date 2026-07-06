const mysql = require("mysql2");
require('dotenv').config()

const connectionPool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port : process.env.PORT,
});

connectionPool.getConnection(function(err) {
    if (err) {
        throw err;
    }
});

module.exports = connectionPool;

