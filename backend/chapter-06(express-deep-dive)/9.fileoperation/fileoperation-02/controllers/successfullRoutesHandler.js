const path=require("path")
const mongoose=require("../model/mongoose")
const successfullRoutesHandler=(req,res)=>{
  
  let object=new mongoose(req.body.homeName,req.body.pricePerNight,req.body.Location,req.body.rating,req.body.photourl)
  object.save((error)=>{
      if(error)
      {

        console.log("error while saving adata:",error)
      
      }
    
      else
      {

        console.log("data is successfully saved")
        res.sendFile(path.join(__dirname,"../","views","successfullPage.html"))
      }
    })
  }

module.exports=successfullRoutesHandler

  