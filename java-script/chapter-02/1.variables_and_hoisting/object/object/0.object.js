// Object:An object is used to store a collection of  diffrent data type in key(proeprties of object –value pairs  format.

//Objects accupied a space in a heap and varaible pointing to it accupied in a stack

// object is mutable that means it can be modifi


// now question how object data type organised in a heap memory ?

//Object properties are organized like a hash table (key → value).
//Primitive values are stored directly in the hash table.
//Non-primitives (objects, arrays, functions) are stored as references pointing to another memory location.
//This is why modifying a nested object affects all references pointing to it.

let person = {
    name: "Shahid",
    age: 21,
    isStudent: true
};

console.log(person.name); // Output: Shahid
console.log(typeof person); // "object"
