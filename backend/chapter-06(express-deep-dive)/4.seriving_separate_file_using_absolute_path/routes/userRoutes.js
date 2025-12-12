const express=require("express");
const path = require("path");
const userRoutes=express.Router();
userRoutes.get("/",(req,res)=>{
    //  res.sendFile(path.join(__dirname,"../","views","home.html"))
    res.sendFile(path.dirname,'views','home.html')
})

module.exports=userRoutes


