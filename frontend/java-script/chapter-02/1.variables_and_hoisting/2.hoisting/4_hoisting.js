//Function Hoisting

//case1:

// function call
sayHello();
// fucntion defination
function sayHello() {
  console.log("Hello!");
}



//case2:
function sayHello() {
  console.log("Hello!");
}
sayHello();




// explanation
// function declaration  is hoisted and intialzed with their code
// so does't matter you call the function before function declaration or after it work fine


