require('dotenv').config()
const jwt = require('jsonwebtoken')
const userRouter = require('../routes/userRouter')

const authJWT = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        res.setHeader("WWW-Authenticate", "bearer");

        return res.status(401).json({
            status: "Ditolak",
            message: "Anda belum login nih"
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: "Ditolak",
            message: "Format token yang di input salah 'bearer <token>'"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

        if (err) {
            return res.status(401).json({
                status: "Ditolak",
                message: "Token Invalid"
            });
        }

        req.user = user;

        next();

    });

};


module.exports = {authJWT}


