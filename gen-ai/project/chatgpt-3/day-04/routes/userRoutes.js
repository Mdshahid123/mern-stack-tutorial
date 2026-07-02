const express=require("express")
const getHomePage=require("../controllers/userController")

const userRoutes=express.Router() //function reutrn kargea


userRoutes.get("/",getHomePage)


userRoutes.get("/login",(req,res)=>{
     res.send("this is a logi9n page")
})



userRoutes.get("/signup",(req,res)=>{
     res.send("this is a signup page")
})




module.exports=userRoutes