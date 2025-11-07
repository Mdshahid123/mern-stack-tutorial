//Nullish Coalescing(??):The nullish coalescing operator (??) is used to provide a default value only when a variable is null or undefined.

// It’s very similar to the OR (||) operator, but with one key difference.


//Example 1 — Basic Use
let username = null;
let displayName = username ?? "Guest";

console.log(displayName); // "Guest"
// Here,
// username is null,
// so ?? returns "Guest".


//Example 2 — With undefined
let age;
let userAge = age ?? 18;

console.log(userAge); // 18
//Because age is undefined, ?? uses the right-hand value 18.


// 2)Optional Chaining(?.):Optional chaining (?.) is a feature in JavaScript that lets you safely access deeply nested object properties without causing an error if any part of the chain is null or undefined.
// it is often used with (??)


// without optional chaining:
let user1 = {
  name: "Shahid",
  address: {
    city: "Delhi"
  }
};
console.log(user1.address.city);     // ✅ Works fine
console.log(user1.address.pincode);  // ❌ undefined (safe)
console.log(user1.contact.phone);    // ❌ Error: Cannot read properties of undefined

// The last line throws an error because user.contact is undefined, and you tried to access .phone from it.



// With Optional Chaining 
console.log(user1.contact?.phone);   // undefined (No error!)


// JavaScript safely checks:

// Does user.contact exist?

// If yes, then it tries to get .phone.

// If no, it immediately returns undefined instead of throwing an error.



//Combine with Nullish Coalescing (??):Often used together to provide a default value:

let user2 = {};

let city = user2.address?.city ?? "Unknown";
console.log(city); // "Unknown"