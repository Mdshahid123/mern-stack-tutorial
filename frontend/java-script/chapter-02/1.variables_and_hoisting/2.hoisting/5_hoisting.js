// Example 4 — Function Expression Hoisting

//case1:
//function call
sayHi();//error
//console.log(sayHi)//undefiend

// function expression
var sayHi = function() {
  console.log("Hi!");
};

//case2:
var sayHi = function() {
  console.log("Hi!");
};
sayHi();
