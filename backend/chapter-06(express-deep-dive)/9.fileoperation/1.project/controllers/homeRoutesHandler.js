const path=require("path")
const { registeredHome}=require("./successfullRoutesHandler")
const homeRoutesHandler=(req,res)=>{
     res.render("homePage",{registeredHome})
}
module.exports=homeRoutesHandler