const mongoose=require("./mongoose")
let object=new mongoose("5bhk",5,"mumbai")
object.save((error)=>{
  if(error)
  {

    console.log("error while saving a data 1:",error)
  }
  else{
    console.log("successfully data is saved 1 ")
  }

  //string a second data
  let object2=new mongoose("8bhk",10,"pune")
  object2.save((error)=>{
     if(error)
     {
       console.log("error while saving a data 2",error)
     }
     else{
      console.log("successfully submitted a data 2")
     }

     object2.fetchAll((error,data)=>{
         if(error)
          console.log("error while fetching a data",error)
        else{
          console.log("successfuly fetch data:",data)
        }
    
     })
       
  })


})






