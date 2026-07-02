const path=require("path")//core module 
function getHomePage(req,res){
  const filePath=path.join(__dirname,"../public/homePage.html")
   res.sendFile(filePath,(error)=>{
     if(error)
     {
      
       console.log('error while reading a home page:',error)
     }
   })
}

module.exports=getHomePage