//this in construtor function

function student(name,age,city)
{
       console.log(this)
       this.name=name
       this.age=age 
       this.city=city
}

student.prototype.sayHi=function(){
   console.log(`hi ${this.name}`)
}

let st2=new student("raj",20,"new delhi")
st2.sayHi()


