const express=require("express")
const dotenv=require("dotenv")
const userRoutes=require("./routes/userRoutes")
dotenv.config()
const app=express()


// midllware rgistration 
app.use(userRoutes)

app.use((req,res)=>{
    res.send("404 requested page not found")
})


//routes handling 

const port=process.env.port || 4000
app.listen(port,()=>{
    console.log(`server is lisning at port :${port}`)
})