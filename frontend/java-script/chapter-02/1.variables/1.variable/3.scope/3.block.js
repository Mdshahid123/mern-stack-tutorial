//defination:block scope:variable decalred in any block rather than function block is called block scope

// example:all variable declared in block scope


function fun() {

    if (true) {
        let a = 10;
        var b = 11;
        const c = 18;
    // accessing a block variable from the block scope
    console.log(a, b, c)
    }
// accessing a block variable from the local scope
console.log(a)//error
console.log(b)//error
console.log(c)
}
fun()
//accsing a block variable from the global scope
console.log(a)//error
console.log(b)//error
console.log(c)//error


//conclustion
//var can be only local and global if it is inside the block then it is treated as outside the block

// so if outside the block there is function then it is treatd as local and if outsite is not any function then it is treated as global