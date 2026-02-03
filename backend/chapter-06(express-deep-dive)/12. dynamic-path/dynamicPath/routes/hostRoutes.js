const express=require("express")
const {registerHomeRoutesHandler,submitRoutesHandler,hostHomeListRoutesHandler}=require("../controllers/hostRoutesContoller")
const hostRoutes=express.Router()
hostRoutes.get("/registerHome",registerHomeRoutesHandler)
hostRoutes.post("/submit",submitRoutesHandler)
hostRoutes.get("/hostHomeList",hostHomeListRoutesHandler)

module.exports=hostRoutes

