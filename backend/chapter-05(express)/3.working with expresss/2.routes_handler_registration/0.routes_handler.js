//A route handler is a function that executes when a specific URL (route) and HTTP method (like GET, POST, PUT, DELETE) is requested, and it is responsible for handling the request and sending a response.

//Simple Explanation
// Route (URL) → /home, /login, /api/users
// Method → GET, POST, etc.
// Handler → function that runs when both match
//  Example
app.get("/home", (req, res) => {
    res.send("Welcome to Home Page");
});
// /home → route
// GET → request type
// (req, res) => {...} → route handler
// 