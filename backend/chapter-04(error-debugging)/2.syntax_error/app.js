//importing core module
const http=require("http")
//importing local module
const testingSyntax=require("./syntax_error") 


let server=http.createServer((res,req)=>{
  //"/syntax" route handler
  if(req.url==="/syntax")
  {    
       testingSyntax() 
       res.write("<h1>succfully subbmitedd reuqest</h1>")
       res.end()
       return 
  }
      
})



const port=3000
server.listen(port,()=>{
  console.log(`server is listening at http://localhost:${port}`)
})