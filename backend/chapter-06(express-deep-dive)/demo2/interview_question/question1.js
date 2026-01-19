// what is express.static()

//express.static() is a middleware that task is to serve a static file like css,java script and images direct from the folder 

//how it work behined  the scene? 

//it makes a middle ware behidne the scene
function staticMiddleware(req, res, next) {
   // logic to serve files
}

Browser Request
     │
     ▼
Express App
     │
     ▼
express.static("public")
     │
     ├─ File found → Send file → END
     │
     └─ File not found → next()
                         │
                         ▼
                     API Routes / 404


Request → Middleware 1 → Middleware 2(express.static('public'))->routes handler                 