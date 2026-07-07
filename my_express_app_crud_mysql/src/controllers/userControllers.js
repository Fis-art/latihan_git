const connectionPool = require("../config/db")
const bcrypt = require('bcrypt')
const login = (req, res) => {
    res.send("selamat datang di halaman login")

}

const register = (req, res) => {
    let { email, nama, pass } = req.body;
    let queryText = `SELECT * FROM tb_user WHERE email_tb_user = "${email}"`;

    connectionPool.query(queryText, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "failed",
                message: err.message
            });
        }
    
        bcrypt.hash(pass, 10, (err, hashedPass) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    status: "failed",
                    message: err.message
                });
            }

            let insertQuery = `
                INSERT INTO tb_user (email_tb_user, nama_tb_user, pass_tb_user)
                VALUES ("${email}", "${nama}", "${hashedPass}")
            `;

            connectionPool.query(insertQuery, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({
                        status: "failed",
                        message: err.message
                    });
                }

                return res.status(201).json({
                    status: "success",
                    message: "Registrasi berhasil"
                });
            });
        });
    });
};





module.exports = {
    login,
    register

}