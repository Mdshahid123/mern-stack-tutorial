// what is the use case of creating a string using backtick?


// we have to create a string with back tick when we have to create a string with embedded expression or multi line strings

//example of multi line string:
let str=`hello shahid
welcome to js programming`
console.log(str)

//example of embedded expression:
let a=5
let b=6
let sum=`the sum of ${a} and ${b} is ${a+b}`
console.log(sum)