const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authRouter=require("./Routes/authRoutes")
dotenv.config()
const app=express()

// middle are registration
app.use(express.json())
app.use(cookieParser())
app.use(authRouter)

const port=process.env.port || 3000
//connecting with mongo db atlas
async function connect_with_mogodb()
{

      try {
        const promise=await mongoose.connect(process.env.mongodb_cloud_server)
        console.log("connected with mongodb server ")
        app.listen(port,()=>{
          console.log(`server is listning at ${port}`)
        })
      } catch (error) {
            console.log("error while connecting with mongo db server:",error)
      }
      
}

connect_with_mogodb()


