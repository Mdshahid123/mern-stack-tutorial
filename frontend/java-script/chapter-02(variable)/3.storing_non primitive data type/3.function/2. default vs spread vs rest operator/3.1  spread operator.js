//spread operator:it split the elements of an array or object into individual items.

//Used to unpack values.


//Example 1: Spread in Arrays
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5];
// console.log(newArr);


//Output:

// [1, 2, 3, 4, 5]

let arr=[1,2,3,4,5,9,8]
let [i1,i2,i3,i4,...i5]=arr
console.log(i1)
console.log(i2)
console.log(i3)
console.log(i4)
console.log(i5)

