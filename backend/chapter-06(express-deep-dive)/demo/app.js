const express=require("express")
const path=require("path")
const {homeRoutes}=require("./router/homeRoutes")
const {registerHomeRoutes}=require("./router/registerRoutes")

const app=express()
app.set('view engine','ejs')
app.set('views','views')
// adding middleware for parsing the incoming submit data
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//adding a middleware  1
app.use(homeRoutes)

// adding middle ware 2
app.use(registerHomeRoutes)

// adding middle ware 2

app.use(express.static(path.join(__dirname,"./", "public")))//express.static return a fuction that will find the requested css static file from the browser
//if found than it give that file to the browser and move to the next middle ware otherwise it give error message to the borwser


const port=4000
app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})



