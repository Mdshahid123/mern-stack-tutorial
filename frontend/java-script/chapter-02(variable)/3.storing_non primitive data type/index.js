function greet(num1,num2) {
  console.log(num1+num2);
  console.log(arguments)//return array of arguments
}

greet(1,2)
console.log(greet.__proto__)

