const express=require("express")
const {registeredHomes}=require("./hostRoutes")
const path=require("path")
const { registerHomes } = require("../../6.dynamic-ui/routes/hostRoutes")
const userRoutes= express.Router()

userRoutes.get("/",(req,res)=>{
  console.log("this is a home page")
    //  res.sendFile(path.join(__dirname,"../","views","home.html"))  
    res.render('home',{registeredHomes})
})

module.exports=userRoutes