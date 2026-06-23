const mongoose=require("mongoose")
const dotenv=require("dotenv")
const studentClass=require("./model/student")
dotenv.config()

async function mongodb_connection_cloud()
{
        try{

                  let response1 = await mongoose.connect(process.env.mongodb_cloud)
                  console.log("mogo db is succefully connected")

                  //Q2. How do we insert multiple documents
      
                       studentClass.insertMany(
                       [{
                              name:"raj",
                              age:24
                        },
                        {
                              name:"shahid",
                              age:28
                        },
                        {
                              name:"wahid",
                              age:26
                        }]
                  )
               console.log("sucessfully saved the document in mongo db atlas")  
        }catch(error){
            console.log(error)
        }

}

mongodb_connection_cloud()
