const express=require("express")
const hostRoutes=require('./routes/hostRoutes')
const userRoutes=require("./routes/userRoutes")
const dotenv=require("dotenv")
const app=express()
//adding middle ware
// middleware to load the .env file and make it available in process.env
dotenv.config()
app.set('view engine','ejs')
app.set('views','views/user')
//middleware:serving a static file
app.use(express.static("public"))
//middleware2:
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(hostRoutes)
app.use(userRoutes)
const port=process.env.port || 4000
app.listen(port,()=>{
    console.log(`server is lsiting at ${port}`)
})

