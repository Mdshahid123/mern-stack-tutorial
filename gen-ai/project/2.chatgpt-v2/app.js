
const express=require("express")
const userRoutes=require("./router/user")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

const app=express()

app.use(express.static("public"))
app.use(express.json())
app.use(userRoutes)

async function connect_with_mongodb()
{
   try {
          const promise=await mongoose.connect(process.env.mongodb_cloud)
          console.log("mongodb connected successfully")
          const port=process.env.port || 4000
          app.listen(port,()=>{
             console.log(`server is listning at port:${port}`)
          })

   } catch (error) {    
         console.log("mongo db connection failed:",error)
   }      

}   


connect_with_mongodb()
