const express = require("express");
const userRouter = express.Router();
const { authJWT } = require("../middleware/auth");

const { 
    login, 
    register,


} = require('../controllers/userControllers');

userRouter.get('/login', authJWT, login)
userRouter.post('/register', register)

module.exports = userRouter;