
const fs=require("fs")
const path=require("path")


class registerHome
{
      //constructor fucntion
      constructor(homeName,pricePerNight,Location,rating,photourl)
      {
         this.homeName=homeName
         this.pricePerNight=pricePerNight
         this.Location=Location
         this.rating=rating
         this.photourl=photourl
      }

      //fucntion 

      save(callback)
      {
        //first of all we have to fetch previus data and then previus data and current data we should save
        const  filepath=path.join(__dirname,"../","dataBase","homeRegistraion.json")
         let  allData=[] 
         registerHome.fetchAll(filepath,(error,savedData)=>{
              if(!error && savedData)
               allData=savedData
            
                allData.push(this)

             const  filepath=path.join(__dirname,"../","dataBase","homeRegistraion.json")
              fs.writeFile(filepath,JSON.stringify(allData),(error)=>{
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

      static fetchAll(filePath,callback)
      {      
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