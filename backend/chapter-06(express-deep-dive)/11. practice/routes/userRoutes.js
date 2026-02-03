const express=require("express")
const {homeRoutesHandler,bookingRoutesHandler,favouriteRoutesHandler}=require("../controllers/userRouterController")
const userRoutes=express.Router()

userRoutes.get("/",homeRoutesHandler)
userRoutes.get("/booking",bookingRoutesHandler)
userRoutes.get("/favourite",favouriteRoutesHandler)

module.exports=userRoutes