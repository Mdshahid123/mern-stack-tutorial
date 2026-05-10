const express=require("express")
const hostRoutes=require('./routes/hostRoutes')
const userRoutes=require("./routes/userRoutes")
const app=express()
//adding middle ware
app.set('view engine','ejs')
app.set('views','views/user')
//middleware:serving a static file
app.use(express.static("public"))
//middleware2:
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(hostRoutes)
app.use(userRoutes)
const port= 4000
app.listen(port,()=>{
    console.log(`server is lsiting at ${port}`)
})

