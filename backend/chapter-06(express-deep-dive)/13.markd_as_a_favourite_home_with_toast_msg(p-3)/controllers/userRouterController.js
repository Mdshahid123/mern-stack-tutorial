const path=require("path")
const ListingModel=require("../model/ListingModel")
const favouriteModel=require("../model/favouriteModel")
const fs=require("fs")

// showing a home page
const showHomePage=(req,res)=>{
        ListingModel.fetchAll((error,registeredHome)=>{
          if(error)
          {
               console.log("error while fetching data:",error)
               return 
          }
          res.render("homeListPage",{registeredHome})
        })
}



// storing a favourite
function storeFavourite(req, res) {
    console.log(req.params);
    const favObject = new favouriteModel(req.params); 
    favObject.save((error,message)=>{
          if(error)
          {
             console.log("error while marking your home as a favoutie:",error)
             res.redirect("/?message=some thing went wrong")
          }

          //  res.send("already marked as favourite")
          else if(message==="Already Exist"){
             res.redirect("/?message=⚠ Already in Favourite")
          }

          else{
            res.redirect("/?message=✔ Added to Favourite")
          }
    })
   
}

//getting a home details
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


// shoing a favourite homes 

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
    showHomePage,
    storeFavourite,
    getHomeDetails,
    showFavourites

}