const express=require("express")
const path=require('path')
const registerHomeRoutesHandler=require("../controllers/registerHomeRoutesHandler")
const registerHomeRoutes=express.Router()

registerHomeRoutes.get("/registerHome",registerHomeRoutesHandler)

module.exports=registerHomeRoutes