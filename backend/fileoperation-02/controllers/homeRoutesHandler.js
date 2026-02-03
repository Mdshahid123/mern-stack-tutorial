const path=require("path")
const mongoose=require("../model/mongoose")
const homeRoutesHandler=(req,res)=>{
        mongoose.fetchAll((error,registeredHome)=>{
          if(error)
          {
               console.log("error while fetching data:",error)
               return 
          }
          console.log("registeredHome data is:",registeredHome)
          res.render("homePage",{registeredHome})
        })

}
module.exports=homeRoutesHandler
