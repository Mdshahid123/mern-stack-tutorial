// parsing the request body manually
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
app.use((req,res,next)=>{
    let body=[]
    req.on("data",(chunk)=>{
        console.log("chunk received",chunk)
        body.push(chunk)
    })
    req.on("end",()=>{
        //concatenate the received chunks and convert to string
        const data = Buffer.concat(body).toString()
        console.log("data received",data)
        //converting into the key value format
        const params= new URLSearchParams(data)
        console.log(params)
        //converting into the java script object so that we can access the individual data
        const jsobj={}
        for(const [key,value] of params.entries())
        {
            jsobj[key]=value
            console.log("jsobj:",jsobj)
        }
        req.body=jsobj
        next()      
       })
})
//routes handling registration
app.post("/submit",(req,res)=>{
     console.log(req.body)
})


const port=3000
app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})

