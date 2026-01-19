// what is object? 
// An object is non primitive data type which store data and defines operations or algorithm or methods  that can be performed on that data.
                  or
// object encapsulates data and method

// in java-script An object is represented as a in key-value pairs format. like

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

// fetaures of object

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
