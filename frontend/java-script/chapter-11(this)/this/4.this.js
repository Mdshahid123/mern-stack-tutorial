let student={
     name:"raj",
     age:20,
     city:"new delhi",
     sayHi:function(){
        console.log(this)
        console.log(`hi ${this.name}`)
     }
}

student.sayHi()




