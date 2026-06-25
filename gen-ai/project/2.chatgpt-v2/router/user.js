const express=require("express")

const userRoutes=express.Router()

const {showHomePage,callToLlm}=require("../controllers/user")


// =========================
// home page  Endpoint
// =========================
userRoutes.get("/", showHomePage)




// =========================
// Chat Endpoint
// =========================

userRoutes.post("/chat", callToLlm)



module.exports=userRoutes

