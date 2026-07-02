const mongoose=require("mongoose")
const dotenv=require('dotenv')
const studentClass=require("./model/studentModel")
dotenv.config()

async function mongo_db_connection()
{
      try {
        const promise1=await mongoose.connect(process.env.mongodb_cloud)
        console.log("mongo db successfully connected with mongodb")

        // queries likhnege ge 

        // we have to make a one document 

        const studentObject=new studentClass({
             name:"shahid",
             age:24,
             email:"shahiddelhi989@gmail.com"
        })
        

        const promise2= await studentObject.save()
        console.log("succffuly save your document to the mongo db cloud ")


        
      } catch (error) {
          console.log("error while establish a connection with mongo db",error)
      }
      

}

mongo_db_connection()


