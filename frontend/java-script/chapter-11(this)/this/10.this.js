let student={
  name:"raj",
  age:20,
  sayHi:()=>{
    console.log(this)
    console.log(`hi ${this.name}`)
  }
  
}

student.sayHi()