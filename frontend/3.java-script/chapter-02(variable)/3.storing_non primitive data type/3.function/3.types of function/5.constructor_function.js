// Constructor Functions

// construtor function is like a normal function which is automatically call  internally by the new keyowrd during the object creation.

// Constructor functions are generally used as templates or blueprint to create multiple similar type of  objects easily.

//example:Object Type Person
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Example
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log(myFather)