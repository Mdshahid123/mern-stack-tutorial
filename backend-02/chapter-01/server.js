// imporitng http module

const http=require("http")
// creat server 

let server=http.createServer((req,res)=>{
     console.log(req.url)
     console.log(req.method)
     //we have to send diffrent difffrent repsonce based on requested url
     if(req.url=="/")
     {
          res.setHeader("content-type","text/html")
          res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
       <h1>home page</h1>
</body>
</html>`) 
res.end()
     }

    //
    else if(req.url=="/product")
    {
      res.setHeader("content-type","text/html")
      res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
       <h1>i am product</h1>
</body>
</html>`)
    }
    else{
      res.setHeader("content-type","text/html")
      res.write("requested not avialable")
      res.end()
      

    }
})



let port=3000
server.listen(port,()=>{
  console.log(`server is listining at http:${port}`)
})

