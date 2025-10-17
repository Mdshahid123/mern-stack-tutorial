// java script object can be createed using object lateral,using empty object or using new keword,

// Create an Object using  Object Literal
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}


//You can also create an empty object, and add the properties later:

// Create an Object
const person2 = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


//Create a new JavaScript object using new Object():

// Create an Object
const person3 = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
});

console.log(person)

// advanced topic

// JavaScript Object.create()
// The Object.create() method creates an object from an existing object.

// Create an Object:
const person4 = {
    firstName: "John",
    lastName: "Doe"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";



//Object method fromEntries() to JavaScript.
//The fromEntries() method creates an object from iterable key / value pairs.

Example
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);



// avaScript Object.assign()
// The Object.assign() method copies properties from one or more source objects to a target object.

//Example
// Create Target Object
const person5 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person6 = {
    firstName: "Anne",
    lastName: "Smith"
};

// Assign Source to Target
Object.assign(person1, person2);