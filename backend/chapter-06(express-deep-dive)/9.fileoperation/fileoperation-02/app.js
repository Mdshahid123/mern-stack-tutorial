const express=require("express")
const homeRoutes=require('./routes/homeRoutes')
const registerHomeRoutes=require("./routes/registerHomeRoutes")
const successfullRoutes=require("./routes/successfullRoutes")


const app=express()
const port=4000

//adding middle ware
app.set('view engine','ejs')
app.set('views','views')

//middleware:serving a static file
app.use(express.static("public"))
//middleware2:
app.use(homeRoutes)
app.use(express.urlencoded())

app.use(successfullRoutes)

app.use(registerHomeRoutes)
app.listen(port,()=>{
    console.log(`server is lsiting at ${port}`)
})