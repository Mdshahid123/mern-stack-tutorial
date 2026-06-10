
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
           const  filepath=path.join(__dirname,"./","database","homeRegistraion.json")
            const data=JSON.stringify(this)
            fs.writeFile(filepath,data,(error)=>{
                 if(error)
                  {
                      callback(error)
                  } 
                  else{
                    callback()
                  }
                
            }) 
      }

 fetch(callback)
 {  
   const filePath=path.join(__dirname,"./","database","homeRegistraion.json")
     fs.readFile(filePath,"utf-8",(error,data)=>{
          if(error)
            callback(error)
          else{
            callback(data)
          }
     })  
 }

}

module.exports=registerHome