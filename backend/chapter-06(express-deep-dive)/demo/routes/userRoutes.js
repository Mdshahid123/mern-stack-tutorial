const express=require("express")
const {bookingRoutesHandler,homeRoutesHandler}=require("../controllers/userRoutesHandler")
const userRoutes=express.Router()

userRoutes.get("/",homeRoutesHandler)
userRoutes.get("/bookings",bookingRoutesHandler)

module.exports=userRoutes
