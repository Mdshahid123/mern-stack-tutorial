const express=require("express")
const path=require('path')
const app=express()

const hostRoutes=express.Router()
hostRoutes.get("/host/add-home",(req,res)=>{
     res.sendFile(path.join(__dirname,"../","views",'addHome'))
})
hostRoutes.post('/host/add-home',(req,res)=>{
     console.log(req.body)
       res.send(path.join(__dirname,"../","views","home-added.html"))
})


module.exports=hostRoutes
