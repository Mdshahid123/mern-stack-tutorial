//create a sum function that return the summ for irrespective of no of argument caller passed


function sum(...nums)
{    let sum=0
    for(let num of nums)
    {
        sum=sum+num
    }

    return sum
}

let result=sum(2,3,4,5)
console.log(result)