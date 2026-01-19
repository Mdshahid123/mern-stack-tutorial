// global scope
function fun()
{
    // local scope 

    let a=9
    console.log(a)
    {
        //block scope
        b=10
        console.log(b)
    }
}

fun()