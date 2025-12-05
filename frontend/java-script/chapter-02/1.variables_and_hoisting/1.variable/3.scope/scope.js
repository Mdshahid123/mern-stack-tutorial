// what is scope:scope is a certain region of program where defined variable life exist and beyond that it's life does't exist

// global scope:variable life exist till the life of a program and vriable exist in this region is called global variable that is global variable can be access in anywhere in the program

let a = 8;

function fun() {
    //loacl scope:variable life is till the life of a function that is if function ends then variable defined in function release the memory so beyond the function block it can't be eccessed
    // variable defiend in the local scope is called local variable

    // block scope:
    let b = 8
    {
        let c = 9
    }
}


