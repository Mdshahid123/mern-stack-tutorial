const express=require("express")
const userRoutes=require("./routes/userRoutes")
const app=express()

app.use(userRoutes)
//creating a server 
const port=3000;
app.listen(port,()=>{
    console.log(`server is listining at https://locahost:${port}`)
})
