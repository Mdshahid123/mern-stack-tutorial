// diffrent types of fucntion in java script

// 1)named function:This is the most common and traditional way to create a function.

function greet() {
  console.log("Hello, Shahid!");
}

greet(); // Output: Hello, Shahid!



//2)Anonymous Function:A function without a name

// example:
     //i) Anonymous function using traditional syntax
      const greet = function(name) {
        return `Hello, ${name}!`;
      };
    //ii)Anonymous function using arrow function
      const greetArrow = (name) => `Hello, ${name}!`;

//3)Immediately Invoked Function Expression (IIFE):A function that runs as soon as it is defined.

(function() {
  console.log("This runs immediately!");
})();


//4)Function Constructor:Created using the Function constructor (not recommended for regular use).

const greet = new Function('name', 'return "Hello " + name');
console.log(greet("Shahid")); // Output: Hello Shahid


//5)callback function:A callback function is a java script  function that is passed as an argument to another function,and that function calls it later (or “calls it back”)  at a specific time.


setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);




// conclustion:function in java script is a first class function that means function in java script is treated as a variable












