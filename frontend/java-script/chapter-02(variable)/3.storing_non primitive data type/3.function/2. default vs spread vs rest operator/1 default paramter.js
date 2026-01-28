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