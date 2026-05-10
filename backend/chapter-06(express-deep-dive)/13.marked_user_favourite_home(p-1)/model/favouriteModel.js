const path=require("path")
const fs=require("fs")
const registerHome=require("./ListingModel")
class FavouriteModel {

     // constrcutor fucntion
       constructor(Data)
          {
                 this.homeId=Data.homeId 
          }  
          
      // save function
            save(callback)
            {
              //first of all we have to fetch previus data and then previus data and current data we should save
                FavouriteModel.fetchAll((error,favHomes)=>{
                    if(error)
                    {
                        callback(error)
                        return 
                    }
                  let allFavHomes
                    try {
                           allFavHomes=JSON.parse(favHomes)
                      
                    }catch(error) {
                       allFavHomes=[]
                    }
                  // now we have a either a all favoutite of emty array 
                  allFavHomes.push(this)

                  const filePath=path.join(__dirname,"../","dataBase","favouriteData.json")
                  fs.writeFile(filePath,JSON.stringify(allFavHomes,null,2),{encoding:"utf-8"},(error)=>{
                                    if(error)
                                    callback(error)
                                    else
                                    callback(null)
                              })

                })
          
           }

        static fetchAll(callback)
               {  
                  const filePath=path.join(__dirname,"../","dataBase","favouriteData.json") 
                  fs.readFile(filePath,"utf-8",(error,data)=>{
                    if(error)
                    {
                      callback(error,data)
                      return
                    }
                  else{
                        callback(error, data)
                    }
                  }) 
               }
}
module.exports=FavouriteModel