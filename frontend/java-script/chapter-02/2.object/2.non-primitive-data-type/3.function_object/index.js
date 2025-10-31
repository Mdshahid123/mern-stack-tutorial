// fuction without parameter and with return  value 

let sum=0
function add(...num)
{
     for(item of num)
     {

       sum=item+sum
     }

     console.log(sum)
}
add(4,5,6,7,8,9,90,0,)

