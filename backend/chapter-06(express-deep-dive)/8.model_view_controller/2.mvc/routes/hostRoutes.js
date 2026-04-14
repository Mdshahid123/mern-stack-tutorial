const express=require("express")
const hostRoutes=express.Router()
const {getRegisterPage,saveRegisterDetails}=require("../controllers/hostControllers")


hostRoutes.get("/registerHome",getRegisterPage)

hostRoutes.post("/registerHome/submit",saveRegisterDetails)


module.exports=hostRoutes
//__dirname gives the absolute path of the directory where the current file is located.
