const express=require("express")
const homeRoutes= express.Router()
const homeController=require("../controllers/homeController")
homeRoutes.get("/",homeController.getHome)

module.exports=homeRoutes
