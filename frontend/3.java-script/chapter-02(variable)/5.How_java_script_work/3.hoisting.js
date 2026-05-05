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



// explanation

//behaviour of function expresstion depends on how function expresstion  is declared(let,const,var) 

// if it is declared with var then it will be hoisted and intialized with undefined 

// if it is declared with let and const then it will be hoisted but unintialized(remains In TDZ) so if we call the fucntion before function expresion then it give refence error

