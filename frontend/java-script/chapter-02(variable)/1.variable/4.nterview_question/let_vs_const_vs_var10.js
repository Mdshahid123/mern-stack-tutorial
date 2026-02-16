//let vs const vs var

//first difference declaration
//we can re declare the same varibale with var in same scope but let and const can't redclare in same scope

//example1:run this program to see it

var a=10
var a=11

console.log(a)



//second diffrence declaration without intilization 
//we can declare the variable first with let and var and then later on we can intilage it but with const we must has to intialize the variable and after intilzation we can't reintilze it


//3rd diffrence 
// let,const can be local , global as well as  block where as var can be only local and global if it is insdie the block then it is treated as outside the block

// so if outside the block there is function then it is treatd as local and if outsite is not any function then it is treated as global



//Summary:
//Keyword	     Function Scope	      Block Scope    global scope
//var	             ✅ Yes               ❌ No        ✅yes
//let       	     ✅ Yes	             ✅ Yes       ✅yes
//const	             ✅ Yes           	 ✅ Yes       ✅yes
//without keyword    ❌ NO                ❌ NO        ✅yes 

//note:varaible without keyword is not hoisted



