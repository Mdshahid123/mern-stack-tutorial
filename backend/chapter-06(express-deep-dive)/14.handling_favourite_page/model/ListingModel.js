
const fs=require("fs")
const path=require("path")


class registerHome
{
      //constructor fucntion
      constructor(data)
      {
            this.homeName = data.homeName;
            this.pricePerNight = data.pricePerNight;
            this.location = data.location;
            this.rating = data.rating;
            this.photourl = data.photourl;
            this.images = data.images;
            this.amenities = data.amenities;
            this.description = data.description;
            this.host = {
            name: data.host.name,
            joined: data.host.joined,
            superhost: data.host.superhost
            };
      }

      //fucntion 

      save(callback)
      {
        //first of all we have to fetch previus data and then previus data and current data we should save
         let  allData=[] 
         registerHome.fetchAll((error,savedData)=>{
              if(!error && savedData)
               allData=savedData
            
              allData.push(this)
              const filePath=path.join(__dirname,"../","dataBase","homeRegistraion.json")
              fs.writeFile(filePath,JSON.stringify(allData),(error)=>{
                   if(error)
                    {
                       callback(error)
                    } 
                    else{
                          callback(null)
                    }
                  
              }) 
          })
      }

      static fetchAll(callback)
      {  
             const filePath=path.join(__dirname,"../","dataBase","homeRegistraion.json")    
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

module.exports=registerHome