const express=require("express")

const userRoutes=express.Router() //function reutrn kargea


userRoutes.get("/",(req,res)=>{
     res.send("this is a chatgpt home page")
})


userRoutes.get("/login",(req,res)=>{
     res.send("this is a logi9n page")
})



userRoutes.get("/signup",(req,res)=>{
     res.send("this is a signup page")
})




module.exports=userRoutes