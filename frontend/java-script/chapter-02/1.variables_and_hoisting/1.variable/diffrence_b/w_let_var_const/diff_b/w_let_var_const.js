//let vs const vs var

//first diffrence declaration
//we can re declare the varibale with var in same scope but let and const can't redclare in same scope

// second dfirrecne declaration without intilization 
//we can declare the variable first with let and var and then later on we can intilage it but with const we must has to intialize the variable

//3rd diffrence hoisting

function abc() {
    let d = 9//hoisted and intiallized
    //console.log(a)
    //console.log(b)
    // console.log(c)
    console.log(d)

    //let a=9//hoisted but unitialize(tdz)
    //var b=8//hoisted and intialized with u ndefined
    // const c=6//hoisted but unitialized(tdz)
}

abc()

//4th diffrence 
// let,const can be local as well as global and block where as var can be only local and global if it is insdie the block then it is treated as outside the block

// so if outside the block there is function then it is treatd as local and if outsite is not any function then it is treated as global


//Example:
{
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x); // ✅ 10 → because `var` is hoisted to global
console.log(y); // ❌ ReferenceError → block scoped
console.log(z); // ❌ ReferenceError → block scoped

// Another example with a function:
function test() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 9;
    }

    console.log(a); // ✅ 1
    console.log(b); // ❌ ReferenceError → because `b` is block scoped
    console.log(c);
}

//Summary:
//Keyword	     Function Scope	       Block Scope
//var	              ✅ Yes             	 ❌ No
//let       	     ✅ Yes	                ✅ Yes
//const	            ✅ Yes           	    ✅ Yes






