const path=require("path")
const registeredHome=[] //array of object
const successfullRoutesHandler=(req,res)=>{
  registeredHome.push(req.body)
  res.sendFile(path.join(__dirname,"../","views","successfullPage.html"))
}

module.exports={
   registeredHome,
   successfullRoutesHandler

}  