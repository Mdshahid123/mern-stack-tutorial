const express=require("express")
const {homeRoutesHandler,bookingRoutesHandler,favouriteRoutesHandler,getHomeDetails}=require("../controllers/userRouterController")
const userRoutes=express.Router()
userRoutes.get("/",homeRoutesHandler)
userRoutes.get("/booking",bookingRoutesHandler)
userRoutes.get("/getfavourite",getfavourites)
userRoutes.get("/favourite/:heartId",storeFavourite)
userRoutes.get("/home/details/:homeId",getHomeDetails)
module.exports=userRoutes
