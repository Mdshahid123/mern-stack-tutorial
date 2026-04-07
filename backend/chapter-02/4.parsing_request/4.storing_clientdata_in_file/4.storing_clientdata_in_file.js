// url search params

// reading the chunks of client submitted data 
const http=require("http")
const fs=require("fs")

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
      let body=[]
      //data is not comming in one pack it is comming in chunk so jase hi data ka pahla chunk aa jaye is call back ko run kar dena 
       req.on("data",(chunk)=>{
          console.log(chunk)
        // jitne bhi chunk hai un sb ko array mai store karenge
          body.push(chunk)
       })
         req.on("end",()=>{
        //joining a chunks
        const joinChunks=Buffer.concat(body)
        console.log("joinChunks:",joinChunks)
        // conveting a join chunks into the string
        const string_form=joinChunks.toString() 
        // 
        const params= new URLSearchParams(string_form)
        // converting into the jsform
        const jsobj={}
        for(const [key,value] of params.entries())
        {
            jsobj[key]=value
            console.log("jsobj:",jsobj)
        }
        // strong a data into the file
        const filePath=""
        const jsonData=JSON.stringify(jsobj)
        fs.writeFile(filePath,jsonData,(error)=>{
            if(error)
             {
                  res.write("<h1>Error while saving a data</h1>");
                  console.log("error while saving a data")
             }
             else{
              res.write("<h1>data is submitted succesffully</h1>")
             }
        })
         res.end()

       })   
  }
})
server.listen(3000,()=>{
  console.log("server is lsitening")
})