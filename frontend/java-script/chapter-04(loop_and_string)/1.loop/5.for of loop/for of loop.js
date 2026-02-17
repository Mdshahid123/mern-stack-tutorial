//create a object and eccess each element using for,while,do while ,and for...of loop
let arr=[2,3,4,5,6]
let object={
  name:"md shahid",
  age:24
}
for(let [key] of Object.entries(object))
{
  console.log(object[key])
}