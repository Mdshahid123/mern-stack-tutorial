//what is the use case of creating a string using backtick?


//we have to create a string with back tick when we want a string with embedded expression or multi line strings.

//use case 1:multi line string:
let str=`hello shahid
welcome to js programming`
console.log(str)

//use case 2: string with substitute a embedded expression:
let a=5
let b=6
let sum=`the sum of ${a} and ${b} is ${a+b}`
console.log(sum)