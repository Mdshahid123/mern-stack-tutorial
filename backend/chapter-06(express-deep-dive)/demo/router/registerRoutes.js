const express=require("express")
const path=require("path")
const registerHomeRoutes=express.Router() // here registerHomeRoutes is a function

// this function will run routehandler on specific path or routes and requested method 

registerHomeRoutes.get("/registerHome",(req,res)=>{
         res.sendFile(path.join(__dirname,"../","views","registerPage.html"))
})

const registeredHomes=[]
registerHomeRoutes.post("/registerHome/submit",(req,res)=>{
    registeredHomes.push(req.body)
    res.sendFile(path.join(__dirname,"../","views","registerHomeSuccessPage.html"))
    
})
exports.registeredHomes=registeredHomes
exports.registerHomeRoutes=registerHomeRoutes

