const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movies_db"
});
connectionPool.getconnection(function(err) {
    if (err) {
        throw err;
    }
});

module.exports = {
    connectionPool
};