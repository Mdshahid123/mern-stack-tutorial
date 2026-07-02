const express=require('express')
const submitSignupForm=require("../controller/userController")


const userRoute=express.Router()


userRoute.post("/signup",submitSignupForm)


module.exports=userRoute

