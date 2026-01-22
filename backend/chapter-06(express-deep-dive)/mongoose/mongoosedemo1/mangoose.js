const fs=require("fs")
const path=require("path")
class homeRegistration
{
     //constructor  fucntion

     constructor(homeName,location,rating)
     {
           this.homeName=homeName
           this.location=location
           this.rating=rating

     }

     save()
     {   
       const filePath=path.join(__dirname,"./","tatabase","database.json")
       const data=JSON.stringify(this)
        fs.writeFile(filePath,data,(error)=>{
            if(error)
            return error
        })
     }


}
let object=new homeRegistration("firsthome","delhi",5)
try {
       object.save((error,message)=>{
          console.log(message)
       })
      
} catch (error) {
      console.log(error)
}