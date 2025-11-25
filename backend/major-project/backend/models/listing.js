const mongoose=require('mongoose')
const Schema=mongoose.Schema;

// creating a Schema
const listingSchema=new Schema({
    title:{
       type:String,
       required:true
    },
    description:String,
    image:{
      type:String,
      set:(v)=>v==""?"https://unsplash.com/photos/grand-building-with-dome-and-surrounding-architecture-_jF2nXuu9AA":v
    },
    price:Number,
    location:String,
    country:String
})

// creating a document asper given Schema

const Listing=mongoose.model("Listing",listingSchema)
modules.export=Listing

