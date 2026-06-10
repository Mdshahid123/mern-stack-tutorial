const path=require("path")
const express=require("express")
const app=express()

//adding middleware to parse the incoming data
app.use(express.urlencoded({extended:true}))

// handling "/form" route to serve the form.html file
app.get("/form",(req,res)=>{
     const filepath=path.join(__dirname,"./","index.html")
     res.sendFile(filepath,(error)=>{
           if(error){
                console.log("error in sending file",error)
                res.send("oops!! something went wrong please try later")
                return 
           }
     })
})

//handle the form submission
app.post("/submit",(req,res)=>{
  console.log("recevied data:",req.body)
  res.send("data submit successfully")
})

//creating and listening the server
let port=4000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

