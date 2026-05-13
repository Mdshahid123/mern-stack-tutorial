const path=require("path")
const ListingModel=require("../model/ListingModel")
const registerYourHome=(req,res)=>{
  res.sendFile(path.join(__dirname,"../","views/host","registerYourHome.html"),(error)=>{
       if(error)
       {
         console.log("error while fetching registerHomePage ",error)
         res.send("some thing wen wrong")
         return 
       }
  })
}

const submitRoutesHandler=(req,res)=>{
  let object=new ListingModel(req.body)
  object.save().then((result)=>{
        console.log("homes saved successfully:",result)
  }) 
}
const hostHomeListRoutesHandler=(req,res)=>{
  res.sendFile(path.join(__dirname,"../","views/host","hostHomeListPage.html"))
}

module.exports={
    registerYourHome,
    submitRoutesHandler,
    hostHomeListRoutesHandler
}