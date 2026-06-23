const express=require("express")
const user=require()

const userRoutes=express.Router()

// =========================
// Chat Endpoint
// =========================

user.Routes("/", showHomePage)
user.Routes("/chat", callToLlm)
module.exports=userRoutes

