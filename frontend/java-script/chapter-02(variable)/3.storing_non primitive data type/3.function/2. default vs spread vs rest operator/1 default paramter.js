// default parametr vs spread operator vs rest operator

//1)default paramter:A default parameter is a value that is automatically assigned to a function’s parameter if the caller doesn’t pass that argument or pass the undefined,the function still works without errors.


function sum(num1=0,num2=0)
{
   return num1+num2
}
sum()
sum(2)
sum(2,3)

