const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()//
async function mongo_db_connect()
{
  try {
    
    const promise=await mongoose.connect(process.env.mongodb_cloud)
    console.log("succesffuly connected with mongo db cloud")

  } catch (error) {
     console.log("error while connecting with mongo db atlas")
  }

}

mongo_db_connect()
