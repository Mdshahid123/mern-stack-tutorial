// step:01:importing express(external module)
const express=require("express")//it return a function

//running  that function give object
const app=express()
console.dir(app)


// step-02:middlware registration

//Global middleware (runs for every request)
app.use((req, res, next) => {
    console.log("Middleware 1: Request received");

    // You MUST call next() to move to next middleware/route
    next();
});


//Another middleware
app.use((req, res, next) => {
    console.log("Middleware 2: Checking authentication...");
    next();
});

//step-03:route handler registartion

// "/" route handler
app.get("/",(req,res)=>{
   res.send("you requested a home page ")
})

// "/about" route handler
app.get("/about",(req,res)=>{
     res.send("you requested a about page ")
})


// "/contact" route handler
app.get("/contact",(req,res)=>{
   res.send("you requested a contact page ")
})

const port=4000
// inernally it uses a http module to create a server as well as listen a request
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`)

})