const express=require("express")
const {registerHomeRoutesHandler,successfullRoutesHandler}=require("../controllers/hostRoutsHandler")
const registerHomeRoutes=express.Router()

registerHomeRoutes.get("/registerHome",registerHomeRoutesHandler)

const successfullRoutes=express.Router()
successfullRoutes.post("/registerHome/submit",successfullRoutesHandler)

module.exports={
  successfullRoutes,
  registerHomeRoutes
}