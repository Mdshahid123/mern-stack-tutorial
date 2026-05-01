const express=require("express")
const {homeRoutesHandler,bookingRoutesHandler,storeFavourite,getHomeDetails,showFavourites}=require("../controllers/userRouterController")
const userRoutes=express.Router()
userRoutes.get("/",homeRoutesHandler)
userRoutes.get("/booking",bookingRoutesHandler)
userRoutes.get("/showfavourites",showFavourites)
userRoutes.get("/favourite/:homeId",storeFavourite)
userRoutes.get("/home/details/:homeId",getHomeDetails)
module.exports=userRoutes
