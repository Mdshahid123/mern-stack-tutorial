const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRoute=require("./routes/userRoutes")
dotenv.config()
const app=express()

// middleware registration
app.use(express.json())
app.use(userRoute)




// mongoose connection
async function connectDB(){

  try {
    const promise=await mongoose.connect(process.env.MONGODBCLOUD)
    console.log("mongo db connection successfull")
    const PORT=process.env.PORT||5000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    
  } catch (error) {
        console.log("mongodb connecttion faild:",error)
  }
    

}

connectDB()
