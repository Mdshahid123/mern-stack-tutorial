//Middleware is a function that runs for every incoming request.
//before the routes handler 

//Since it is a function, whatever code we write inside it will get executed.

//But generally, we write middleware to perform tasks that must be done before the route handler runs (like logging, authentication, validation, etc.).

//After executing its work, if the middleware decides that the request should continue, it calls next() to pass control to the next middleware or route handler.

//If the middleware does not call next() and instead sends a response,then the request-response cycle stops there and the next middleware or route handler will NOT execute.
