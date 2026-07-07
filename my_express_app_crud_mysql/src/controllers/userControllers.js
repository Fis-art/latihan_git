require('dotenv').config()
const connectionPool = require("../config/db")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authJWT = require("../middleware/auth")

const register = (req, res) => {
    let { email, nama, pass } = req.body;

    // Validasi input
    if (!email || !nama || !pass) {
        return res.status(400).json({
            status: "failed",
            message: "Semua field wajib diisi."
        });
    }

    // Cek apakah email sudah terdaftar
    let queryText = `
        SELECT * FROM tb_user
        WHERE email_tb_user = "${email}"
    `;


    connectionPool.query(queryText, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "Gagal",
                message: `Gagal memeriksa data pengguna. ${err.message}`
            });
        }

        if (result.length > 0) {
            return res.status(400).json({
                status: "Gagal",
                message: "Email sudah terdaftar."
            });
        }

        // Hash password
        bcrypt.hash(pass, 10, (err, hashedPass) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: "Gagal",
                    message: `Gagal mengenkripsi password. ${err.message}`
                });
            }

            // Simpan data ke database
            let insertQuery = `
                INSERT INTO tb_user
                (email_tb_user, nama_tb_user, pass_tb_user)
                VALUES
                ("${email}", "${nama}", "${hashedPass}")
            `;

            connectionPool.query(insertQuery, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({
                        status: "Gagal",
                        message: `Gagal menyimpan data pengguna. ${err.message}`
                    });
                }

                return res.status(201).json({
                    status: "Sukses",
                    message: "Registrasi berhasil."
                });
            });
        });
    });
};

const login = (req, res) => {
    let { email, pass } = req.body;

    // Validasi input
    if (!email || !pass) {
        return res.status(400).json({
            status: "Gagal",
            message: "Email dan password wajib diisi."
        });
    }

    // Cek email
    let queryText = `
        SELECT * FROM tb_user
        WHERE email_tb_user = "${email}"
    `;

    connectionPool.query(queryText, (err, result) => {

        // Error database
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "Gagal",
                message: `Gagal memeriksa data pengguna. ${err.message}`
            });
        }

        // Email tidak ditemukan
        const user = result[0];

        if (!user) {
            return res.status(400).json({
                status: "Gagal",
                message: "Email atau password salah."
            });
        }
        
        //callback
        // Bandingkan password
        bcrypt.compare(pass, user.pass_tb_user, (err, isMatch) => {

            // Error bcrypt
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: "Gagal",
                    message: `Gagal memverifikasi password. ${err.message}`
                });
            }

            // Password salah
            if (!isMatch) {
                return res.status(400).json({
                    status: "Gagal",
                    message: "Email atau password salah."
                });
            }

            // Generate Access Token
            const accessToken = jwt.sign(
                {
                    email: user.email_tb_user
                },
                process.env.JWT_SECRET
            );
            
            // Login berhasil
            return res.status(200).json({
                status: "Sukses",
                message: "Login berhasil."
                
            });

        });
            // //jikalau taruh disini login berhasilnya tidak terpanggil
            // const accessToken = jwt.sign({email: user.email_tb_user},process.env.JWT_SECRET);
            // res.json(accessToken)

    });
};



module.exports = {
    login,
    register

}