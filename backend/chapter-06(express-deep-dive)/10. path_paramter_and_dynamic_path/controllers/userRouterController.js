const path=require("path")
const mongoose=require("../model/mongoose")
const homeRoutesHandler=(req,res)=>{
     const  filepath=path.join(__dirname,"../","dataBase","homeRegistraion.json")
        mongoose.fetchAll(filepath,(error,registeredHome)=>{
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
    //fetch the data from bookingData.json
    const  filepath=path.join(__dirname,"../","dataBase","bookingHome.json")
    mongoose.fetchAll(filepath,(error,data)=>{
             if(error)
             {
                console.log(error)
                res.send("something wen wrong")
             }
             else{
                res.render("bookingPage",{data})
             }
    })

}
const favouriteRoutesHandler=(req,res)=>{
      //fetch the data from bookingData.json
    const  filepath=path.join(__dirname,"../","dataBase","favourite.json")
    mongoose.fetchAll(filepath,(error,data)=>{
             if(error)
             {
                console.log(error)
                res.send("something wen wrong")
             }
             else{
                res.render("favouriteListPage",{data})
             }
    })
}

function getHomeDetails(req,res)
{
     //fetch the data from bookingData.json
    const  filepath=path.join(__dirname,"../","dataBase","homeDetails.json")
    mongoose.fetchAll(filepath,(error,data)=>{
             if(error)
             {
                console.log(error)
                res.send("something wen wrong")
             }
             else{
               console.log(data)
               console.log("req.params.id:",req.params)
               for(const home of data){
                   if(req.params.homeId==home._id)
                   {
                      console.log("details_data:",home)
                      res.render("homeDetailPage",{home})
                      return 

                   }
                  }
                res.send("home details page not found")

             }
    }) 
}
module.exports={
    homeRoutesHandler,
    bookingRoutesHandler,
    favouriteRoutesHandler,
    getHomeDetails
}