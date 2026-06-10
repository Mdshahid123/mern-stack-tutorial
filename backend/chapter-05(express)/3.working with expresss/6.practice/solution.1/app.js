const path=require("path")
const express=require("express")
const app=express()

//adding middleware to parse the incoming data
const body=[]
app.use((req,res,next)=>{

        // reading chunks
        req.on("data",(chunk)=>{
            console.log("recevied chunk:",chunk)
             body.push(chunk)

        })
     //when all the data is received  
        req.on("end",()=>{
               // joinging the chunks
               const joinData=Buffer.concat(body)
               console.log("complete data:",joinData)
               // parsing the data 

               // convert the buffer to string
               const dataString=joinData.toString()
               console.log("data string:",dataString)

               // parsing the data string to key value pair
               const dataObj={}
               const keyValuePairs=dataString.split("&")
               console.log(keyValuePairs)
               keyValuePairs.forEach(pair=>{
                    const arr=pair.split("=")
                    const key=arr[0]
                    const value=arr[1]
                    dataObj[key]=value
               })
               req.body=dataObj
               next()
        })

})
// handling "/form" route to serve the form.html file
app.get("/form",(req,res)=>{
     const filepath=path.join(__dirname,"./","index.html")
     res.sendFile(filepath,(error)=>{
           if(error){
                console.log("error in sending file",error)
                res.send("oops!! something went wrong please try later")
                return 
           }
     })
})

// handle the form submission
app.post("/submit",(req,res)=>{
  console.log("recevied data:",req.body)
  res.send("data submit successfully")
})

// creating and listening the server
let port=4000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

