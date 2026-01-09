const path=require("path")
const {registeredHomes}=require("./registerRoutes")
const express=require("express")

const homeRoutes= express.Router() //here home routes is a function 


// this function will run routes handler  on a specific path and request method

homeRoutes.get("/",(req,res)=>{

        // for sending dynamic html file
        res.render("homePage.ejs",{registeredHomes})
})



exports.homeRoutes=homeRoutes


