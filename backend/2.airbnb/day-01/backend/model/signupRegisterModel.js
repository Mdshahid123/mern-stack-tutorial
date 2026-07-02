const mongoose=require("mongoose")

// schema for signup and register
const signupSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true
     },

     email:{
      type:String,
      required:true,
      unique:true
     },
     password:{
        type:String,
        required:true
     }
})


// we should need a class for signup
  const registerSignupClass=mongooose.model("registerSignup",signupSchema)
  module.exports=registerSignupClass

  