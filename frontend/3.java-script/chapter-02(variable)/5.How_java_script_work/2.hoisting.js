//example:02:Function Hoisting

//case1:we call the function before it's declaration

// function call
sayHello();
// fucntion defination
function sayHello() {
  console.log("Hello!");
}



//case2:we call the function after it's declaration
function sayHello() {
  console.log("Hello!");
}
sayHello();




// explanation
// function declaration  is hoisted and intialzed with their code
// so does't matter you call the function before function declaration or after it work fine


