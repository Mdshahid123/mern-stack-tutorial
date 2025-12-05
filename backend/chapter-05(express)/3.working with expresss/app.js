// importing a external module
const express=require("express")

const app=express()

// adding middlewares
// register "/" url
app.use((req,res)=>{
     
})

const port=4000
app.listen(port,()=>{
   console.log(`server is running at http://localhost:${port}`)

})