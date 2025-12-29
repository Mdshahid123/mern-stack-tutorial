const path=require("path")
const getHome=(req,res)=>{
  console.log("this is a home page")
  res.render("home")
}



exports.getHome=getHome
