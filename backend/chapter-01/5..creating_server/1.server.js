//importing http module
const http=require('http')

//creating a http server
const server=http.createServer((req,res)=>{
  //console.log("req:",req)
  console.log(req.url)
  console.log(req.method)
  
})
const Port=3000
//listing a request
server.listen(Port,()=>{
  console.log(`server is running at http://localhost:${Port}`)
})


//by default browser send a get request  and url "/"



