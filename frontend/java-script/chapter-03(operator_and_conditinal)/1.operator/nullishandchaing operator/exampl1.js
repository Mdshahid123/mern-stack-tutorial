//Example 1 — Basic Use
let username = null;
username=prompt("enter the name")
let displayName = username ?? "Guest";

console.log(displayName); // "Guest"
// Here,
// username is null,
// so ?? returns "Guest".
