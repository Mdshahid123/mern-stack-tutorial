// function can classified on the basis of parameters and return values into four main types


//1)function  without  paramter  and without return value

// function declaration(named function) or function defination
function fun()
{
   console.log("shahid")

}
// function call
fun()



//2)without parametr and with return value

 function square2()
 {
        let num=2;
        return num*num
 }
 let ans=square2()
 console.log(ans)
//3) with parameter  and without  return value

function fun(name)
{
    console.log(name)
}

fun("shahid")

//4) with parameter and return value

function square(num)
{
      return num*num
}
 console.log(square(2))


//note return is a last instruction of a function after that if we wrote any instruction then it will be not execute  

// note2:variable in parenthesis is called parameter which is actually a local variable of a function




