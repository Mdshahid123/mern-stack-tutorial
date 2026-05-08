const express=require("express")
const hostRoutes=require('./routes/hostRoutes')
const userRoutes=require("./routes/userRoutes")
// const dotenv=require("dotenv")
const {mongoConnect}=require("./utils/dataBaseUtil")
const app=express()
//adding middle ware
// middleware to load the .env file and make it available in process.env
// dotenv.config()
app.set('view engine','ejs')
app.set('views','views/user')
//middleware:serving a static file
app.use(express.static("public"))
//middleware2:
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(hostRoutes)
app.use(userRoutes)
const port=4000

mongoConnect((error,client)=>{
    if(error)
    {
        console.log("error while connecting with the mongo db",error) 
        return 
    }
    else{
        console.log("mongodb connected successfully")
        app.listen(port,()=>{
            console.log(`server is lsiting at ${port}`)
        })
    }
})

