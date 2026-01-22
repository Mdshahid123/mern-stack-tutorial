// Object methods are actions that can be performed on object data
// A method is a function definition stored as a property value.

// example
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};



// accessing Object Methods
myname = person.fullName();

// If you access the fullName property without (), it will return the function definition:
//Example
myname2 = person.fullName;



// Adding a Method to an Object
// Adding a new method to an object is easy:
Example:
person.name = function () {
    return this.firstName + " " + this.lastName;
};
