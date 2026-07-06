const mysql = require("mysql2");

const connectionPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_movies",
    port : 3306
});

connectionPool.getConnection(function(err) {
    if (err) {
        throw err;
    }
});

module.exports = connectionPool;

