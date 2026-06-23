const mongoose=require("mongoose")
const dotenv=require("dotenv")
const studentClass=require("./model/student")
dotenv.config()


async function mongodb_connection_cloud()
{
        try{

              let response1 = await mongoose.connect(process.env.mongodb_cloud)
              console.log("mogo db is succefully connected")

               // How do we insert one document or one object?
                let   studentObject  = new studentClass({
                      name:"md shahid"
                })

               let response2= await studentObject.save()
               console.log("sucessfully saved the document in mongo db atlas")  

        }catch(error){
            console.log(error)
        }

}

mongodb_connection_cloud()
