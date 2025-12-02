// sending response

const http=require("http")
const server=http.createServer((req,res)=>{
  console.log("new request")
     res.setHeader('content-type',"text/html")
     res.write(`
      <html>
         <header>
           <title>response</title>
         </header>
         <body>
            hellow subscibe me
         </body> 
      </html>`)
     res.end()
})
const port=3001
server.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`)
})


//problem here
//whatever the url of request we always sending a same response so it is not good design 
//so we have to make a diffrent diffrent end point for reuqestd url