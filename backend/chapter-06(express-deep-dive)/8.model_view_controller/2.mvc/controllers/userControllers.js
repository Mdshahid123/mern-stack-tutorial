const Home=require("../models/databaseModel")
const getHomes=(req,res)=>{
    const registeredHomeData=Home.fetchAll()
     res.render("homePage.ejs",{registeredHomeData})
}

module.exports=getHomes

