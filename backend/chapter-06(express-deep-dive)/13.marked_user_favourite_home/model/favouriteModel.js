const path=require("path")
const fs=require("fs")
const registerHome=require("./ListingModel")
class FavouriteModel {
       constructor(Data)
          {
                 this.homeId=Data.homeId 
          }  
          
      
            save(callback)
            {
              //first of all we have to fetch previus data and then previus data and current data we should save
               let  allFavouriteHomes=[] 
               FavouriteModel.fetchAll((error,favouriteHomes)=>{
                    if(!error && favouriteHomes)
                     allFavouriteHomes=favouriteHomes
                  
                    allFavouriteHomes.push(this)

                       const filePath=path.join(__dirname,"../","dataBase","favouriteData.json")
                       fs.writeFile(filePath,JSON.stringify(allFavouriteHomes),{encoding:"utf-8"},(error)=>{
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
                              callback(null,[])
                        else if (!data.trim()) { //✅THIS IS THE FIX
                        callback(null, [])
                      }
                        else{
                              JSON.stringify(data)
                              callback(null, JSON.parse(data))
                        }
                         }) 
               }
}
module.exports=FavouriteModel