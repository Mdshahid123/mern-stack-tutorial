const express=require("express")
const successfullRoutesHandler=require("../controllers/successfullRoutesHandler")
const successfullRoutes=express.Router()

successfullRoutes.post("/registerHome/submit",successfullRoutesHandler)

module.exports=successfullRoutes