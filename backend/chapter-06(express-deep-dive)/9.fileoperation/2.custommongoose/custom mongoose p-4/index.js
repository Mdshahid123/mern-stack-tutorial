const mongoose=require("./mongoose")
let object=new mongoose("5bhk",5,"hydrabad")
//saving the data in dummy data base
object.save((error)=>{
  if(error)
    console.log("error while saving the data:",error)
  else{
    console.log("successfully data is saved ")
    //now fetching a data from data base
    object.fetch((error,data)=>{
      if(error)
      {
       console.log(error)
      }
      else{
        console.log(data)
        parseData=JSON.parse(data)
        console.log("ist data",parseData[0])
      }
   })
    }

    
  })
   



