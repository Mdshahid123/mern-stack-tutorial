const path=require("path")
const Home=require("../models/databasemodels")
const successfullRoutesHandler=(req,res)=>{
  console.log(req.body)
  const homedata=new Home(req.body.homeName,req.body.pricePerNight,req.body.Location,req.body.rating,req.body.photourl)
  homedata.save()
  res.sendFile(path.join(__dirname,"../","views","successfullPage.html"))
}

module.exports=successfullRoutesHandler

 