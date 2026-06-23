const mongoose=require("mongoose")

//creating  a schema
const studentSchema=mongoose.Schema({
     name:String,
     age:Number,
     city:String
})

//creating a model that means jo bi collection create hoga use naam student hoga and it's schema will be student schema
const  studentClass =mongoose.model("student",studentSchema)//it will return a class

module.exports= studentClass //exporting a class





