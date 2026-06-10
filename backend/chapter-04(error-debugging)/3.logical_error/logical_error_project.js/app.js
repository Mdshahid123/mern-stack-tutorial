//core module
const http=require("http")
// local module
const logical_error=require("./logical_error") 
const server=http.createServer((req,res)=>{
      logical_error();
})
const port=3002
server.listen(port,()=>{
     console.log(`server is listining at ${port}`)  
})