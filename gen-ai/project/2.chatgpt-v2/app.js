
const express=require("express")
const userRoutes=require("./router/user")
const dotenv=require("dotenv")
dotenv.config()

const app=express()

app.use(express.static("public"))
app.use(express.json())
app.use(userRoutes)

const port=process.env.port || 4000
app.listen(port,()=>{
   console.log(`server is listning at port:${port}`)
})

