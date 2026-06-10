//individual functions for each operation
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero";
}

function modulo(a, b) {
  return a % b;
}

// main calculator function
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "%") {
    return modulo(num1, num2);
  } else {
    return "Invalid Operator!";
  }
}

//user input
let n1 = Number(prompt("Enter first number:"));
let n2 = Number(prompt("Enter second number:"));
let op = prompt("Enter operator (+, -, *, /, %):");

//output
console.log("Result:", calculator(n1, n2, op));


//Memory is used only when a function runs, and then freed immediately.
//Same code is reused without reloading or repeating.
