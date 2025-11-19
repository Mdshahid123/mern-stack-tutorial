// what is object? 
// An object is a representation of a real-world entity that stores its data (properties or attributes) and defines operations or algorithm (methods or behaviors) that can be performed on that data.
                  or
// object encapsulates data and behavior of an real world entity.

// diffrent programming language represent the object in diffrent format
// Object in java script:in java-script An object is represented as a in key-value pairs format. like

student={
name:"sohan",
age:24,
city:'delhi',
marks:{
maths:55,
english:56,
hindi:78
}

}

//it can store a collection of deffrent data types that is primitve and non primitve as well

//object is mutable that means it can be modifi

//Objects accupied a space in a heap and varaible pointing to it accupied in a stack


// now question how object data type organised in a heap memory ? 

//Object are organized in heap memory using hash data table(internally array)

//example
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
// hash("age") → 23 → 22
// hash("city") → 7 → "Delhi"
//hash("obj")->8 ->refrence of an nested object
