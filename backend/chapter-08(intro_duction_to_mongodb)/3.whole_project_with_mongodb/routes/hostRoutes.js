const express=require("express")
const {registerYourHome,submitRoutesHandler,hostHomeListRoutesHandler}=require("../controllers/hostRoutesContoller")

const hostRoutes=express.Router()
hostRoutes.get("/registerHome",registerYourHome)
hostRoutes.post("/registerHome/submit",submitRoutesHandler)
hostRoutes.get("/hostHomeList",hostHomeListRoutesHandler)

module.exports=hostRoutes

