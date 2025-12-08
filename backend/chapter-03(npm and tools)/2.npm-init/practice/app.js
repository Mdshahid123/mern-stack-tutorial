const http=require("http")
const server=http.createServer((req,res)=>{
    res.setHeaders("content-type","html")
    res.write()
    res.end()
})
const port=4000
server.listen(port,()=>{
  console.log(`server is lisning at ${port}`)
})