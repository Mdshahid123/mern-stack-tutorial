// sending a respose based on reuqested url 
const http=require("http")
const server=http.createServer((req,res)=>{
  if(req.url=="/")
  {
    res.setHeader('content-type',"text/html")
    res.write(`
      <html>
        <header>
          <title>response</title>
        </header>
        <body>
          this is a home page
        </body>
      </html>`)
   return res.end()

  }else if(req.url=="/product"){
     res.setHeader('content-type',"text/html")
    res.write(`
        <html>
          <header>
            <title>response</title>
          </header>
          <body>
            here is your product
          </body> 
        </html>`)
    return res.end()
  }
    res.setHeader('content-type',"text/html")
    res.write(`
      <html> 
        <header>
          <title>response</title>
        </header>
        <body>
          for any request other than / and product
        </body> 
      </html>`)
     return res.end()
  
})
const port=300
server.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`)
})