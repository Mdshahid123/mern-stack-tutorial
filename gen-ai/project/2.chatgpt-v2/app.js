
const express=require("express")
const userRoutes=require("./router/user")

const app=express()

const port=3000
app.listen(prompt,()=>{
   console.log(`server is listning at port:${port}`)
})

