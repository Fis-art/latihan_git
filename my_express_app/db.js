const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_movies"
});
connectionPool.getconnection(function(err) {
    if (err) {
        throw err;
    }
});

module.exports = {
    connectionPool
};