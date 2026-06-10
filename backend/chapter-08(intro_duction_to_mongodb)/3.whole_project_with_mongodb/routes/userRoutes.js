const express=require("express")
const {getHome}=require("../controllers/userRouterController")
const userRoutes=express.Router()
userRoutes.get("/",getHome)



module.exports=userRoutes
