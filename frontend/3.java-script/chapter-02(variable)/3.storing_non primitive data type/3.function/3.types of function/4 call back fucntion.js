//5)callback function:A callback function is a java script  function that is passed as an argument to another function,and that function calls it later (or “calls it back”)  at a specific time.


function fun(a){
     a("shahid")
}

function greet(name)
{
     console.log(`hello ${name}`)
}
fun()