// this in arrow function

let sayHi=()=>{
    console.log(this)
}

sayHi()

//this in an arrow function does NOT belong to the function itself.
// It takes this from its parent (outer) scope.