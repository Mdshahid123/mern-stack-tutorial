function sum(num1,num2) {
  console.log(num1+num2);
  console.log(sum.arguments) //return array of arguments
  console.log(sum.name)
  console.log(sum.__proto__)
}

sum(1,2)
