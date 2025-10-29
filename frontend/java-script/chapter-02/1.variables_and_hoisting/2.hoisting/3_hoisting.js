//Example 2 — With let and const
// console.log(b); 
let b = 5;
console.log(b)



// Why?

// let and const are hoisted too, but not initialized until the execution reaches their line.
// They remain in a Temporal Dead Zone (TDZ) the time between hoisting and declaration line(the line where they are defined)