
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

      save()
      {
           const  filepath=path.join(__dirname,"./","database","homeRegistraion.json")
            const data=JSON.stringify(this)
            fs.writeFile(filepath,data,(error)=>{
                 if(error)
                  {
                      return error
                  } 
                
            }) 
      }


}

module.exports=registerHome