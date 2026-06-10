// without optional chaining:
let user1 = {
  name: "Shahid",
  address: {
    city: "Delhi"
  }
};
console.log(user1.address.city);// ✅ Works fine
console.log(user1.address.pincode);// undefined (safe)
console.log(user1.contact.phone);// ❌ Error: Cannot read properties of undefined

// The last line throws an error because user.contact is undefined, and you tried to access .phone from it.