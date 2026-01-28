const path=require("path")
const registerHomeRoutesHandler=(req,res)=>{
     res.sendFile(path.join(__dirname,"../","views","registerHomePage.html"))
}

module.exports=registerHomeRoutesHandler