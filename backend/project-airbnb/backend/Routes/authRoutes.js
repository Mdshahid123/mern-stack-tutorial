const express=require("express")
const signUp = require("../controllers/authControllers")
const authRouter=express.Router()


authRouter.get("/api/auth/signUp",signUp)


module.exports=authRouter