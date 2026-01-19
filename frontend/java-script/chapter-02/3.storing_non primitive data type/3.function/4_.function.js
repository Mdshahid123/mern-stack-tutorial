// default parametr vs spread operator vs rest operator

//default paramter:A default parameter is a value that is automatically assigned to a function’s parameter if no argument is provided


function sum(num1=0,num2=0)
{
  console.log(num1+num2)
}
sum()
sum(2,6)
sum(2,3,4)
sum(2,3,4,5,6)

// rest operator(...):we used rest operator as a paramter in function defination when we don't know how many argument function call passed.

// packs multiple arguments into a single array.


//Example 1: Rest in Function Parameters
function sum(...numbers) {
  console.log(numbers);//it give array of parameter
}

sum(1, 2, 3, 4);

//output:
[1,2,3,4,5,6]

//2)Rest with Other Parameters
function introduce(first, ...hobbies) {
  console.log("Name:", first);
  console.log("Hobbies:", hobbies);
}
introduce("Shahid", "Coding", "Cricket", "Music");

//Output:

Name: Shahid
Hobbies: [ 'Coding', 'Cricket', 'Music' ]


//Example 3: Rest in Destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]


// spread operator:it Expands / spreads elements of an array or object into individual items.
//Used to unpack values.


//Example 1: Spread in Arrays
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);


//Output:

[1, 2, 3, 4, 5]

//Spread in Objects
const person = { name: "Shahid", age: 22 };
const newPerson = { ...person, city: "Delhi" };

console.log(newPerson);

//Output:

{ name: 'Shahid', age: 22, city: 'Delhi' }



//Example 3: Spread in Function Calls
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // same as add(1, 2, 3)


//Output:

6

