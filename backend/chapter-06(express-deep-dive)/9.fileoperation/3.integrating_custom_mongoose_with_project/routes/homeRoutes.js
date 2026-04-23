const express=require("express")
const homeRoutesHandler=require("../controllers/homeRoutesHandler")
const homeRoutes=express.Router()

homeRoutes.get("/",homeRoutesHandler)

module.exports=homeRoutes