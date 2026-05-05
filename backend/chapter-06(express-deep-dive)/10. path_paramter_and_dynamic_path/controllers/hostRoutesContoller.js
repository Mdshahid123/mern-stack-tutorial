const path=require("path")
const mymongoose=require("../model/mongoose")

const registerHomeRoutesHandler=(req,res)=>{
  res.sendFile(path.join(__dirname,"../","views/host","registerHomePage.html"))
}

const submitRoutesHandler=(req,res)=>{
     let object=new mymongoose(req.body.homeName,req.body.pricePerNight,req.body.Location,req.body.rating,req.body.photourl)
     object.save((error)=>{
      if(error)
      {

        console.log("error while saving adata:",error)
        return 
      
      }
        console.log("data is successfully saved")
        res.sendFile(path.join(__dirname,"../","views/host","submissionSuccessPage.html"))

    })
}

const hostHomeListRoutesHandler=(req,res)=>{
  res.sendFile(path.join(__dirname,"../","views/host","hostHomeListPage.html"))
}

module.exports={
    registerHomeRoutesHandler,
    submitRoutesHandler,
    hostHomeListRoutesHandler
}