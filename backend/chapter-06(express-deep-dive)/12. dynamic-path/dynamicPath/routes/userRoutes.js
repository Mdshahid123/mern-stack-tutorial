const express=require("express")
const {homeRoutesHandler,bookingRoutesHandler,favouriteRoutesHandler,homeDetailsRoutesHandler}=require("../controllers/userRouterController")
const userRoutes=express.Router()
userRoutes.get("/",homeRoutesHandler)
userRoutes.get("/booking",bookingRoutesHandler)
userRoutes.get("/favourite",favouriteRoutesHandler)
userRoutes.get("/homesDetail/:homeId",homeDetailsRoutesHandler)
module.exports=userRoutes