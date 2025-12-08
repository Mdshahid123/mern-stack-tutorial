//importing core module
const express=require("express")
//importing local module
const testingSyntax=require("./syntax_error") 
const app=express()

//"/syntax" route handler

app.get("/",(req,res)=>{
   testingSyntax()
})
const port=3000
app.listen(port,()=>{
  console.log(`server is listening at http://localhost:${port}`)
})