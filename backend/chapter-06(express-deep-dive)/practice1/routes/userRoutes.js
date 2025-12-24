const express=require("express")
const path=require("path")
const userRoutes= express.Router()

userRoutes.get("/",(req,res)=>{
  console.log("this is a home page")
     res.sendFile(path.join(__dirname,"../","views","home.html"))  
})

module.exports=userRoutes