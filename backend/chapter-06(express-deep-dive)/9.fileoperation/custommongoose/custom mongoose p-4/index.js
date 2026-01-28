const mongoose=require("./mongoose")
let object=new mongoose("5bhk",5,"mumbai")
//saving the data in dummy data base
object.save((error)=>{
  if(error)
    console.log("error while saving the data:",error)
  else{
    console.log("successfully data is saved ")
    let object2=new mongoose("3bhk",10,"delhi")
    object2.save((error)=>{
      if(error)
      {
         console.log("error while saving the data:",error)
      }
      else{
        console.log("succefully saved data")
        //now fetching a data from data base
        object.fetch((error,data)=>{
           if(error)
           {
            console.log(error)
           }
           else{
             console.log(data)
           }
        })
      }
    })

    
  }
  

})  



