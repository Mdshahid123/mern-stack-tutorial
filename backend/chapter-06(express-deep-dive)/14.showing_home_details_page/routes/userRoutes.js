const express=require("express")
const {showHomePage,storeFavourite,getHomeDetails,showFavourites}=require("../controllers/userRouterController")
const userRoutes=express.Router()
userRoutes.get("/",showHomePage)
userRoutes.get("/showfavourites",showFavourites)
userRoutes.get("/storeFavourite/:homeId",storeFavourite)
userRoutes.get("/home/details/:homeId",getHomeDetails)
module.exports=userRoutes
