const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{

  if(req.url==="/")
  {

    res.setHeader("content-type","text/html")
    res.write(`
       <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
   </head>
   <body>
     <h1>Welcome to your Home page</h1>
     <form action="/submit-details" method="POST">
       <label for="name">name</label>
       <input type="text" id="name" name="userName" placeholder="enter you name">
       <label for="gender">Gender:</label>
       <label for="male">male</label>
       <input type="radio" id="male" name="gender">
       <label for="female">female</label>
       <input type="radio" id="female" name="gender">
       <button type="submit">submit</button>
     </form>
   </body>
 </html>
     `)
     res.end()
     return
  }

  else if(req.url==='/submit-details' && req.method==="POST")
  {
      console.log(req)
      fs.writeFileSync("./client-data.txt","data")
      return 
  }

  res.write("response for any url")
  res.end()

})
let port=3006
server.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})