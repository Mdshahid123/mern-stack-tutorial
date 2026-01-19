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



//The fromEntries() method creates an object from iterable key / value pairs.

Example
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myfruits=Object.fromEntries(fruits)
console.log(myfruits)

