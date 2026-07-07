const jwt = require('jsonwebtoken')
const userRouter = require('../routes/userRouter')

const authJWT = (req, res, next ) => {
    const authHeader = req.header('Authorization')

    
    if(!authHeader){ 
        res.setHeader('WWW-Authenticate', 'bearer')
        
        return res.status(401).json({
            status : "Ditolak",
            message : "Anda belum login nih"

        })

    }
        // console.log(authHeader)
        const token = authHeader.split(" ")[1]
        console.log(token)
        // if()






    }

module.exports = {authJWT}


