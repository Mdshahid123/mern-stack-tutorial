// what is object?

//An object is a representation of a real-world entity that stores its data (properties or attributes)   and defines operations (methods or behaviors) that can be performed on that data that is an object encapsulates data and behavior of an real world entity.

// Object:in java-script An object is represented as a  in key–value pairs  format.

// it can store a collection of deffrent data types that is primitve and non primitve as well

// object is mutable that means it can be modifi

//Objects accupied a space in a heap and varaible pointing to it accupied in a stack

// now question how object data type organised in a heap memory ?

//Object are organized in memory using hash data strture

// example
let person = {
    name: "Shahid",
    age: 21,
    isStudent: true,
    obj: {

    },
    findage: function age() {

    },

};

// hash("name") → 12 → "Shahid"
// hash("age")  → 23 → 22
// hash("city") → 7  → "Delhi"
//hash("obj")->8  ->refrence of an nested object

//Primitive values are stored directly in the hash table.
//Non-primitives (objects, arrays, functions) are stored as references pointing to another memory location.


console.log(person.name); // Output: Shahid
console.log(typeof person); // "object"
