// case4:all variable declared in block scope


function fun() {

    if (true) {
        let a = 10;
        var b = 11;
        const c = 18;
       // console.log(a, b, c)
    }

    console.log(b)
}
fun()
console.log(b)


// 