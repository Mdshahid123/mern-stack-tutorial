// parsing the request body  using a predefind middleware
const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    //sending a html form to the client
    res.send(`<form action="/submit" method="post">
    <input type="text" name="username" placeholder="Enter your username">
    <input type="password" name="password" placeholder="Enter your password">
    <button type="submit">Submit</button>
    </form>`)
})

//writing a code for parsing the request body using manually
app.use()
//routes handling registration
app.post("/submit",(req,res)=>{
     console.log(req.body)
})


const port=3000
app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})

