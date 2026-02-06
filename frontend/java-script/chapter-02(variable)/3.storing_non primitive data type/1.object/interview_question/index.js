student={
  name:"altmas",
  age:24
}
//console.log(student.age)
let jsonstring=JSON.stringify(student)


//if we have to convert json string back to java script object

let javascriptObject=JSON.parse(jsonstring)
console.log(javascriptObject.age)