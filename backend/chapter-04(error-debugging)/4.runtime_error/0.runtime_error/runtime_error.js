//what is run time error

//refrence error
console.log(x)//x not defined

//type error(num is not a function)
let num=9
console.log(num())

//file not found

const fs=require('fs')
fs.readFileSync('index.txt')//thrown error file not found