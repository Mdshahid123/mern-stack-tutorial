const express=require("express")
const userRoutes=require('./routes/userRoutes')
const {registerHomeRoutes,successfullRoutes}=require("./routes/hostRoutes")


const app=express()
const port=4000

//adding middle ware
app.set('view engine','ejs')
app.set('views','views/user')  //customizing the views folder

//middleware:serving a static file
app.use(express.static("public"))
//middleware2:
app.use(userRoutes)
app.use(express.urlencoded())

app.use(successfullRoutes)

app.use(registerHomeRoutes)
app.listen(port,()=>{
    console.log(`server is lsiting at ${port}`)
})