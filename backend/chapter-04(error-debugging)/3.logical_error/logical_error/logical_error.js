// what is logical error 


let x=5;
if(x=10)//assigment instead of comparision
{
  console.log("x is 10");//incorrectly prints this
}
else{
  console.log("x is not a 10")
}

let arr=[1,23,4,5,6];
for(let i=0;i<=arr.length;i++)
{
    console.log(arr[i]);//prints undefined at the end
}

let num="10"
console.log(num+5);//expected result:15,prints 105
