const jwt = require('jsonwebtoken')
const userRouter = require('../routes/userRouter')

const authJWT = (req, res, next ) => {
    const authHeader = req.header('Authorization')
    console.log(authHeader)
    
    if(!authHeader){ 
        var err = "you're not Authorized"
        res.setHeader('WWW-Authenticate', 'bearer')
        err.status = 401
        return next(err)
    }

}

module.exports = {authJWT}


