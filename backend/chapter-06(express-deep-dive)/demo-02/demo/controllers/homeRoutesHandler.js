
const Home=require("../models/databasemodels")
const homeRoutesHandler=(req,res)=>{
    const registeredHome=Home.fetchdataBase()
    res.render("homePage",{registeredHome})
}
module.exports=homeRoutesHandler
