const express=require("express");
const path = require("path");
const {registerHomes}=require("./hostRoutes")
const userRoutes=express.Router();
userRoutes.get("/",(req,res)=>{
     console.log(registerHomes)
     // res.sendFile(path.join(__dirname,"../","views","home.html"))
     res.render('home',{registerHomes})
})

module.exports=userRoutes


// __dirname gives the absolute path of the directory where the current file is located.
