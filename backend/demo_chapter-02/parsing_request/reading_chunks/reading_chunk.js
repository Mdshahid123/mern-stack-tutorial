const http = require("http")

//creating server
const server = http.createServer((req,res)=>{
//handling "/" url

if(req.url=== "/"){
  
  console.log(req.body)
  
  res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>form</title>
</head>
<body>
  <form action="/form-submit" method="post">

    
    <label for="name">name:</label>
    <input type="text" placeholder="type your name" id="name" name="name">
    <br>
    <p>gender:</p>
    <label for="male">male</label>
    <input type="radio" value="male" id="male" name="gender">
    <br>
    <label for="female">female</label>
    <input type="radio" value="female" id="female" name="gender">
  
    <button type="submit">Submit</button>
    
  </form>

  

</body>
</html>
    `)
    res.end()
  }

else if(req.url==="/form-submit"){
  const body=[]
  req.on("data",(chunk)=>{
    console.log(chunk)
    body.push(chunk)
    console.log(body)
  res.end()
  })
  req.on("end",()=>{
         const parseBody=Buffer.concat(body).toString();
         console.log(parseBody)
         //converting string into javascript object so we can acces the individual data
        const params= new URLSearchParams(parseBody)
        console.log(params)
        // const jsonobj={}
        // for(const item of params.entries())
        // {  
        //   const [key,value]=item
        //    jsonobj[key]=value
        // }
        // console.log(jsonobj)

       })
      
       
       
       res.end()
       return 

}
})
const port=4000
server.listen(port,()=>{
  console.log(`server is running at https://localhost:${port}`)
})
