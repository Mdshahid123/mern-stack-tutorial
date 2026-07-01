const mongoose=require("mongoose")

const studentSchema=mongoose.Schema({
    name:{
      type:String,
      require:true
    },

    email:{
      type:String,
      require:true
    },

    password:{
      type:String,
      require:true
    }
    
},{timestamps:true}),

const userClass=monogoose.model("userCollection",userSchema)

module.exports=userClass