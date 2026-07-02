const express=require("express")
const dotenv=require("dotenv")
const userRoutes=require("./routes/userRoutes")
dotenv.config()
const app=express()


// midllware rgistration 
app.use(userRoutes)

app.use(express.static("public"))//it will return function jis hum middle ware ki tarah use kar rahe hain ,ye hamesha public folder main se static file server krta hain 

app.use((req,res)=>{
    res.send("404 requested page not found")
})

//routes handling 

const port=process.env.port || 4000

// server will start
app.listen(port,()=>{
    console.log(`server is lisning at port :${port}`)
})