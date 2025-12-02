// create a page that shows a navigaion bar Myntra with the follwing links
// A.Home 
// B.Men 
// C.women 
// D.Kids 
// E.Cart 

//clicking on each link,page should naviagate to that page and a welcome to section text is shown there 



const http=require("http")

const server=http.createServer((req,res)=>{
    console.log("request is comming")
    console.log(req.url,req.method)
    if(req.url==='/home')
    {
       res.write('<h1>welcome to the home</h1>')
       res.end()
       return 
    }
    else if(req.url==='/men')
    {
       res.write('<h1>welcome to the men</h1>')
       res.end()
       return 
    }
    else if(req.url==='/women')
    {
       res.write('<h1>welcome to the women</h1>')
       res.end() 
       return
    }
    else if(req.url==='/kids')
    {
       res.write('<h1>welcome to the kid</h1>')
       res.end()
       return 
    }

     res.write(`
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    *{
      margin: 0;
      padding: 0;
    }
      ul{
        background-color: black;
        color: white;
        display: flex;
        list-style: none;
        justify-content: center;
        gap: 100px;
        height:50px;
        align-items: center;
      }
      a{
        text-decoration: none;
        color: white;


      }
  </style>
  <title>Myntra</title>
</head>
<body>
         <header>
             <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                </ul>
             </nav>
         </header>
</body>
</html>
      `)
res.end();

})

const port=4000
server.listen(port,()=>{
  console.log(`server is listening at ${port}`)
})
