const fs=require("fs")
const {getDataBase}=require("../utils/dataBaseUtil.js")
const path=require("path")
class registerHome
{
      //constructor fucntion
      constructor(data)
      {
            this.homeName = data.homeName;
            this.pricePerNight = data.pricePerNight;
            this.location = data.location;
            this.rating = data.rating;
            this.photourl = data.photourl;
            this.images = data.images;
            this.amenities = data.amenities;
            this.description = data.description;
            this.host = {
            name: data.host.name,
            joined: data.host.joined,
            superhost: data.host.superhost
            };
      }
      save()
      {
            const db= getDataBase()
            return db.collection("registeredHome").insertOne(this)
      }
      static fetchAll(callback)
      {  
          const db=getDataBase()
          return db.collection("registeredHome").find().toArray()
      }
}
module.exports=registerHome