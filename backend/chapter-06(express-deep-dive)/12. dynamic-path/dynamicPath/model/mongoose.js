
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
         this.id=Math.random().toString()
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

      static fetchAll(callback)
      {
             const  filepath=path.join(__dirname,"../","dataBase","homeRegistraion.json")
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

      static findById(homeId,callback)
      {
            registerHome.fetchAll((error,allHomes)=>{
                  if(error)
                  {     
                        callback(error,null)
                  }
                  else{
                       const home=allHomes.find((home)=>{
                       return home.id===homeId
                   })
                              
                     callback(null,home)
                 }
            })
      }


}

registerHome.findById("2",(error,home)=>{
      if(error)
      {
            console.log("error while fetching home by id:",error)
      }
      else{
            console.log("home data by id is:",home)
      }
})

module.exports=registerHome