//Combine with Nullish Coalescing (??):Often used together to provide a default value:

let user2 = {};
let city = user2.address?.city ?? "Unknown";
console.log(city); // "Unknown"