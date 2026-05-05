const path=require("path")
const ListingModel=require("../model/ListingModel")
const favourtieModel=require("../model/favouriteModel")
const fs=require("fs")
const homeRoutesHandler=(req,res)=>{
        ListingModel.fetchAll((error,registeredHome)=>{
          if(error)
          {
               console.log("error while fetching data:",error)
               return 
          }
          res.render("homeListPage",{registeredHome})
        })
}
const bookingRoutesHandler=(req,res)=>{
    //fetch the data from bookingData.json
    const  filepath=path.join(__dirname,"../","dataBase","bookingHome.json")
    ListingModel.fetchAll(filepath,(error,data)=>{
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
const storeFavourite=(req,res)=>{
     console.log(req.params)
    const object=new favourtieModel(req.params)
    object.save((error)=>{
         if(error)
         {
            console.log("error while saving a date in favourite.json file:",error)
            res.send("something went wrong")
         }
         else{

            
            res.send("you have maked this home as favourite")

         }
    })
}

function getHomeDetails(req,res)
{
     //fetch the data from bookingData.json
    ListingModel.fetchAll((error,data)=>{
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
    storeFavourite,
    getHomeDetails
}