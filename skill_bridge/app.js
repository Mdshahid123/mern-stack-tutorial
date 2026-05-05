const express=require("express")
const path=require("path")
const app=express()

// serve static files from "public" folder
app.use(express.static("public"))
app.get("/",(req,res)=>{
     const filePath=path.join(__dirname,"./view/","home.html")
     res.sendFile(filePath,(error)=>{
        if(error)
        {
          res.send("something wen wrong please try later")
        }
     }) 
})

app.get("/courses",(req,res)=>{
         const filePath=path.join(__dirname,"./view/","courses.html")
     res.sendFile(filePath,(error)=>{
        if(error)
        {
          res.send("something wen wrong please try later")
        }
     })  
})


app.get("/viewCourse",(req,res)=>{

          const filePath=path.join(__dirname,"./view/","viewCourse.html")
          res.sendFile(filePath,(error)=>{
          if(error)
          {
               res.send("something wen wrong please try later")
          }
          }) 

        
})

const port=3000
app.listen(port,()=>{
     console.log(`server is listning at ${port}`)
})

