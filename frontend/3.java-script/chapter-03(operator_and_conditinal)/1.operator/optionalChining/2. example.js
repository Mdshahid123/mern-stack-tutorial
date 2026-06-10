// with chaining:
let user1 = {
  name: "Shahid",
  address: {
    city: "Delhi"
  }
};
console.log(user1.address.city);     // ✅ Works fine 
console.log(user1.contact?.phone);   // undefined (No error!)
