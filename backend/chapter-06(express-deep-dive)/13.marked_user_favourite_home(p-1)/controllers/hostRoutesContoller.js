const path=require("path")
const mymongoose=require("../model/ListingModel")

const registerHomeRoutesHandler=(req,res)=>{
  res.sendFile(path.join(__dirname,"../","views/host","registerHomePage.html"))
}

const submitRoutesHandler=(req,res)=>{
  let object=new mymongoose(req.body)
  const filePath=path.join(__dirname,"../","dataBase","homeRegistraion.json")
  object.save(filePath,(error)=>{
       if(error)
       {

        console.log("error while saving adata:",error)
         return 
      
      }
         console.log("data is successfully saved")
         res.sendFile(path.join(__dirname,"../","views/host","submissionSuccessPage.html"))

    })
}

const hostHomeListRoutesHandler=(req,res)=>{
  res.sendFile(path.join(__dirname,"../","views/host","hostHomeListPage.html"))
}

module.exports={
    registerHomeRoutesHandler,
    submitRoutesHandler,
    hostHomeListRoutesHandler
}