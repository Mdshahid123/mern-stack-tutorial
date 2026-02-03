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
          res.render("homeListPage",{registeredHome})
        })

}
const bookingRoutesHandler=(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views/user","bookingPage.html"))
}
const favouriteRoutesHandler=(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views/user","favouriteListPage.html"))
}

const homeDetailsRoutesHandler=(req,res)=>{
    const homeId=req.params.homeId
    console.log("homeId is:",homeId)
    mongoose.findById(homeId,(error,home)=>{
        if(error)
        {
            console.log("error while fetching home details:",error)
            res.redirect("/")
            return
        }
        console.log("home details is:",home)
        res.render("homeDetailPage",{home})
    })
}

module.exports={
    homeRoutesHandler,
    bookingRoutesHandler,
    favouriteRoutesHandler,
    homeDetailsRoutesHandler
}