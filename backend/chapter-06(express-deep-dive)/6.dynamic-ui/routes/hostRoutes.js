const express=require("express")
const path=require('path')
const app=express()

const hostRoutes=express.Router()
hostRoutes.get("/host/add-home",(req,res)=>{
     res.sendFile(path.join(__dirname,"../","views",'addHome.html'))
})
const registerHomes=[]
hostRoutes.post('/host/added',(req,res)=>{
       console.log(req.body)
       registerHomes.push({houseName:req.body.homeName})
       res.sendFile(path.join(__dirname,"../","views","home-added.html"))
})
exports.registerHomes=registerHomes
exports.hostRoutes=hostRoutes
// module.exports=hostRoutes
// __dirname gives the absolute path of the directory where the current file is located.