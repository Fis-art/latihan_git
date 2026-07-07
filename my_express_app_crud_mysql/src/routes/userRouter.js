const express = require("express");
const userRouter = express.Router();


const { 
    login, 
    register,


} = require('../controllers/userControllers')

userRouter.get('/login', login)
userRouter.post('/register', register)


module.exports = userRouter;