// rest operator(...):we used rest operator as a paramter in function defination when we don't know how many argument function call passed.

// packs multiple arguments into a single array.


//Example 1: Rest in Function Parameters
function sum(...numbers) {
  console.log(numbers);//it give array of parameter
}

sum(1, 2, 3, 4);

//output:
[1,2,3,4,5,6]
