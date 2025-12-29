const express=require("express")
const homeRoutes=require("./routes/homeRoutes")
//const {hostRoutes} = require("./routes/hostRoutes")
const path = require("path")
const app=express()
app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"./","public")))
//app.use(hostRoutes)
app.use(homeRoutes)
//creating a server 
const port=3000;
app.listen(port,()=>{
    console.log(`server is listining at https://locahost:${port}`)
})
// __dirname gives the absolute path of the directory where the current file is located.

