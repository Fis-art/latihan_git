const express = require("express");
const userRouter = express.Router();

const { 
    login, 
    register,


} = require('../controllers/userControllers');

userRouter.post('/login', login)
userRouter.post('/register', register)

module.exports = userRouter;