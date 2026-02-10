// take input from user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /, %):");

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else if (operator === "%") {
  result = num1 % num2;
} else {
  result = "Invalid Operator";
}

console.log("Result:", result);





//Without functions:
// difficult to read
// All code sits in memory from start to end.
//Memory stays busy even when not used
