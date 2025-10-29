// case1:all variable in global scope
let a = 9;
var b = 10;
const c = 10;

function fun(){
    if(true)
    {
        console.log(a,b,c)
    }
}

{
    console.log(a,b,c)
}

fun()



// conclustion

// var varaible only has  global and local scope

// let and const  variable have  global,local,and block scope

