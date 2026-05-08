const path=require("path")
const ListingModel=require("../model/ListingModel")
const favouriteModel=require("../model/favouriteModel")
const fs=require("fs")
const getHome=(req,res)=>{
        ListingModel.fetchAll().then((registeredHome)=>{
               res.render("homeListPage",{registeredHome})
        })      
}
module.exports={
    getHome
}