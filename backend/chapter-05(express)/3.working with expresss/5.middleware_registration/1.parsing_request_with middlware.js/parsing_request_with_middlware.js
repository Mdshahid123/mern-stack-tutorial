const express=require("express")
const app=express()

// buildin middleware regitration
app.use(express.json())

// routes handling registration
app.post("/submit",(req,res)=>{
     console.log(req.body)
})


const port=3000
app.listen(port,()=>[
    console.log(`server is listening at ${port}`)
])

