const path=require("path")
const ListingModel=require("../model/ListingModel")
const favouriteModel=require("../model/favouriteModel")
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
   //  const  filepath=path.join(__dirname,"../","dataBase","bookingHome.json")
   //  ListingModel.fetchAll(filepath,(error,data)=>{
   //           if(error)
   //           {
   //              console.log(error)
   //              res.send("something wen wrong")
   //           }
   //           else{
   //              res.render("bookingPage",{data})
   //           }
   //  })
}

function storeFavourite(req, res) {

   console.log(req.params);
    const favObject = new favouriteModel(req.params); 
    favObject.save((error, result) => {
    if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            });
        }

        // If your model sends custom message (duplicate etc.)
        if (result === "Already marked as favourite") {
            return res.json({
                success: false,
                message: "Already in favourites"
            });
        }

        return res.json({
            success: true,
            message: "Added to favourites"
        });
    });
}

function getHomeDetails(req,res)
{
     //fetch the data from bookingData.json
    ListingModel.fetchAll((error,data)=>{
             if(error)
             {
                console.log(error)
                return res.send("something wen wrong")
             }
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
    }) 
}

function showFavourites(req, res) {

  favouriteModel.fetchAll((error, favHomes) => {
    if (error) {
      console.log("error while fetching favourite data:", error);
      return res.send("something went wrong");
    }

    ListingModel.fetchAll((error, allHomes) => {
      if (error) {
        console.log("error while fetching home data:", error);
        return res.send("something went wrong");
      }

      // extract favourite ids
      const favouriteIds = favHomes.map(fav => fav.homeId);

      // filter homes
      const favouriteHomes = allHomes.filter(home =>
        favouriteIds.includes(home._id)
      );

      console.log("favouriteHomes:", favouriteHomes);

      // send to frontend
      res.render("favouriteListPage", { favouriteHomes });
    });

  });

}
module.exports={
    homeRoutesHandler,
    bookingRoutesHandler,
    storeFavourite,
    getHomeDetails,
    showFavourites

}