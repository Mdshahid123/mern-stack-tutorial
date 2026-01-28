
const fs=require("fs")
const path=require("path")


class registerHome
{
      //constructor fucntion
      constructor(homeName,rating,location)
      {
         this.homeName=homeName
         this.rating=rating
         this.location=location
      }

      //fucntion 

      save(callback)
      {

         //first of all we have to fetch previus data and then previus data and current data we should save

         let  allData=[] 
          this.fetchAll((error,savedData)=>{
              if(!error && savedData)
               allData=savedData
            
             allData.push(this)

             const  filepath=path.join(__dirname,"./","database","homeRegistraion.json")
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

      fetchAll(callback)
      {
             const  filepath=path.join(__dirname,"./","database","homeRegistraion.json")
             fs.readFile(filepath,"utf-8",(error,data)=>{
                  if(error)
                  callback(null,[])
            else if (!data.trim()) {   // ✅ THIS IS THE FIX
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