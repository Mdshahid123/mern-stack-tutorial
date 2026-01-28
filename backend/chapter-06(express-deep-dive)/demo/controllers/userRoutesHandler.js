const mongoose=require("../models/mongoose")
const path=require("path")
const homeRoutesHandler=(req,res)=>{
     mongoose.fetchAll((error,registeredHome)=>{
            if(error){
                 console.log("Error in fetching data from database",error)
                 return
            }
          console.log("Data fetched successfully from database:",registeredHome)
          res.render("homePage",{registeredHome})
     })
}
const bookingRoutesHandler=(req,res)=>{
     res.sendFile(path.join(__dirname,"../","views/user","booking.html"))
}
module.exports={
  homeRoutesHandler,
  bookingRoutesHandler
}