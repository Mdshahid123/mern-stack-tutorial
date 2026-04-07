const express=require("express")
const fs=require("fs")
const app=express()
// "/" routes handling
app.get("/",(req,res)=>{
    fs.readFile("./pages/index.html","utf8",(err,data)=>{
        if(err){
          console.log(error)
            res.send("Error reading the file")
        } else {
            res.send(data)
        }
    })
})

// "/host/addHome" routes handling
app.get("/host/addHome", (req, res) => {
    fs.readFile("./pages/addHome.html", "utf8", (err, data) => {
        if (err) {
            console.log(error);
            res.send("Error reading the file");
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log("server is listening at 3000");
});
