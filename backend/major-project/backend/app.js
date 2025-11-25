const express=require("express")
const app=express()

// api registration

app.get('/',(req,res)=>{
   res.send("hellow world")
})
const mongoose=require('mongoose')

// connecting with mongo db server 
const MONGO_URL="mongodb://127.0.0.1:27017/wonderlust";

(async function main()
{
  try{

    await mongoose.connect(MONGO_URL)
    console.log("successfully connected with mongodb")

    app.listen(8080,()=>{
      console.log('server is listening at port 8080')
    })
  }catch(error) {
      console.log(error)
  }
})()

