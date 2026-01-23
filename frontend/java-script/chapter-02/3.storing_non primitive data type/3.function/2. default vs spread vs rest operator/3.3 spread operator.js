//Example 3: Spread in Function Calls
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // same as add(1, 2, 3)


//Output:

6