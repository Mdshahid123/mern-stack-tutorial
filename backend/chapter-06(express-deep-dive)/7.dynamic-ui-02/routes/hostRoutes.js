const express=require("express")
const path=require("path")
const router=express.Router()
const registeredHomes=[]
router.post("/host/added",(req,res)=>{
  console.log(req.body)
  registeredHomes.push(req.body)
  res.sendFile(path.join(__dirname,"../","views","addedHome.html"))
})
router.get("/host/add-home",(req,res)=>{
  res.sendFile(path.join(__dirname,"../","views",'addHome.html'))
})
exports.registeredHomes=registeredHomes
exports.hostRoutes=router
