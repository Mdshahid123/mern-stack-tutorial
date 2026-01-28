const path=require("path")
const mongoose=require("../models/mongoose")

const registerHomeRoutesHandler=(req,res)=>{
     res.sendFile(path.join(__dirname,"../admin","views","registerHomePage.html"))
}

const successfullRoutesHandler=(req,res)=>{
  const object=new mongoose(req.body.homeName,req.body.pricePerNight,req.body.
  Location,req.body.rating,req.body.photourl)
  object.save((error)=>{
    if(error){
      console.log("Error in saving data to database",error)
    }else{
      console.log("Data saved successfully to database")
    }
    res.sendFile(path.join(__dirname,"../","views","successfullPage.html"))
  })
}
module.exports={
  successfullRoutesHandler,
  registerHomeRoutesHandler
}