// variable decalred in function is called function scope 

//example:all variable declared in local scope
function fun() {
    let a = 9;
    var b = 10;
    const c = 11;
    
    //accessing local variable from  the local scope
    console.log(a,b,c)
    if(true){
    // accessing local variable from the block scope
        console.log(a,b,c)
    }
   
}

fun()
//accessing local vraible from the global scope
console.log(a,b,c)


// conclustion
//local variable(let,var,const) only accessble in local scope


