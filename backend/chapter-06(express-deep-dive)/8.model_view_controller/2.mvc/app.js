const express=require("express")
const userRoutes=require("./routes/userRoutes")
const hostRoutes=require("./routes/hostRoutes")
const app=express()
app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:true}))
app.use(userRoutes)
app.use(hostRoutes)
app.use(express.static("public"))

//creating a server
const port=3000;
app.listen(port,()=>{
    console.log(`server is listining at https://locahost:${port}`)
})

