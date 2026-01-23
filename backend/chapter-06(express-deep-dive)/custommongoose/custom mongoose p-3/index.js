const mongoose=require("./mongoose")
let object=new mongoose("5bhk",5,"mumbai")
//saving the data in dummy data base
object.save((error)=>{
  if(error)
    console.log("error while saving the data:",error)
  else{
    console.log("successfully data is saved ")
    
  }

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
  

})  


//here problem is that fetch function immdiately call after the save but save fucntion still in working not completed yet bcz it is asych fucntion

//node js alag thread pe ise excute kar raha hain so node js immdiately invoked the next instuction fetch()




