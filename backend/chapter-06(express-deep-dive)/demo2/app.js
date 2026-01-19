// server side 
const path=require("path")
const express=require("express")
const app=express()

//registation of  middleware

//middleware1:it will serve a static file from public folder
//app.use(express.static(path.join(__dirname, "public")))
app.use(express.static("public"))

//we have to register  routes handelers here
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./","views","home.html")) 
    console.log("hello i am server")
})

const port=4000
//creating a server that will be listen client request depending upon client request it will be run the routes handler.
app.listen(port,()=>{
    console.log(`server is running at port ${port} `)
})

