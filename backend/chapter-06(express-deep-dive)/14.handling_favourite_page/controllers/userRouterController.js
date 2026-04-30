const path=require("path")
const ListingModel=require("../model/ListingModel")
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
   //first fetch the all the data from homeRegistraion.json and then filter the data based on heartId
   //  const  filepath=path.join(__dirname,"../","dataBase","homeRegistraion.json")
   //  ListingModel.fetchAll(filepath,(error,data)=>{
   //           if(error)
   //           {
   //              console.log(error)
   //              res.send("something wen wrong")
   //           }
   //           else{
   //          //filter the data based on heartId
   //            for(const home of data){
   //                if(home._id==req.params.heartId)
   //                {
   //                   let object=new mymongoose({homeId:home._id})
   //                   const filePath=path.join(__dirname,"../","dataBase","favoriteData.json")
   //                    object.save(filePath,(error)=>{
   //                            if(error)
   //                            {
         
   //                            console.log("error while saving adata:",error)
   //                               return 
                              
   //                            }
   //                               console.log("data is successfully saved")
   //                               res.sendFile(path.join(__dirname,"../","views/host","submissionSuccessPage.html"))
         
   //                         })
   //                         break 
   //                   }
   //                }  
   //    }
   //  })
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