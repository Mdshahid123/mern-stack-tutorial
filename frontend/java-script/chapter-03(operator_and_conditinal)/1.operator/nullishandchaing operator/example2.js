//Example 2 — With undefined
let age;
let userAge = age ?? 18;

console.log(userAge); // 18
//Because age is undefined, ?? uses the right-hand value 18.