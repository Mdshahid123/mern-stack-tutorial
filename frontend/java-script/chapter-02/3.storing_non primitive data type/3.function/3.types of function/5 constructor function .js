//4)Function Constructor:Created using the Function constructor (not recommended for regular use).

const greet = new Function('name', 'return "Hello " + name');
console.log(greet("Shahid")); // Output: Hello Shahid
