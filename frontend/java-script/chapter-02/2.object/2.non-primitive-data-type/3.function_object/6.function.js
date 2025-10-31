// function declartion vs function expresstion


// 1)Function Declaration:we defined the function with named function


//Hoisted to the top of its scope → you can call it before it’s defined.

//The whole function (code + name) is stored in memory during the creation phase.



// 2)Function Expression:we defined the function with anonymos function and assign it to the variable.
//Syntax:
const greet = function() {
  console.log("Hello, Shahid!");
};

//Usage:
greet(); // ✅ Works (only if called after definition)

// key points

//The function is stored in a variable.

//Not hoisted the same way as declarations — only the variable name is hoisted (with undefined).

//You cannot call it before defining it