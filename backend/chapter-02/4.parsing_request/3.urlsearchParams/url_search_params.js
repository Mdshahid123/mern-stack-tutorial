
const http=require("http")
const { json } = require("stream/consumers")

const server=http.createServer((req,res)=>{
  if(req.url==="/")
  {

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
        <form action="/submit-details" method="post">
          <label for="name">name</label>
          <input type="text" id="name" name="userName" placeholder="enter you name">
          <label for="gender">Gender:</label>
          <label for="male">male</label>
          <input type="radio" id="male" name="gender" value="male">
          <label for="female">female</label>
          <input type="radio" id="female" name="gender" value="female">
          <button type="submit">submit</button>
        </form>
      </body>
      </html>
            `)

      res.end()
      return 
  }

  else if(req.url==="/submit-details" && req.method==="POST")
  {
       res.write("<h1>data is successfully submitted</h1>") 
       console.log("successfuly submitted")
       let body=[]
      // data is not comming in one pack it is comming in chunk so jase hi data ka pahla chunk aa jaye is call back ko run kar dena 
       req.on("data",(chunk)=>{
          console.log(chunk)
        //jitne bhi chunk hai un sb ko array mai store karenge
          body.push(chunk)
       })

       req.on("end",()=>{
         const concatChunks=Buffer.concat(body)
         console.log("concatchunks:",concatChunks)
        //converting into the string 
        const string_form=concatChunks.toString()
        console.log("string_form:",string_form)
        //converting into the key value format
        const params= new URLSearchParams(string_form)
        console.log(params)
        //converting into the java script object so that we can access the individual data
        const jsobj={}
        for(const [key,value] of params.entries())
        {
            jsobj[key]=value
            console.log("jsobj:",jsobj)
        }

       })
       res.end()
       return 
  }
})
server.listen(3000,()=>{
  console.log("server is lsitening")
})
