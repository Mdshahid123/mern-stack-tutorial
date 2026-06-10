//core module
const http=require("http")
//local module
const runtime=require("./runtime") 
const server=http.createServer((req,res)=>{
      runtime();
})
const port=3002
server.listen(port,()=>{
     console.log(`server is listining at ${port}`)  
})