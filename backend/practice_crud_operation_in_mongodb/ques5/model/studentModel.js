const mongoose=require("mongoose")

// we have defiend a scehma 
const studentSchema=mongoose.Schema({
     name:String,
     age:Number,
     email:String

})


const studentClass=mongoose.model("studentCollection",studentSchema)

module.exports=studentClass