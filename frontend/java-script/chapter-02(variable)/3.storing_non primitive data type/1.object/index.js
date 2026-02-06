let student={
  firstName:"md",
  lastName:"shahid",
  fullName:function(){
      return this.firstName+" "+this.lastName
  }
}

let newdata=student.fullName()
console.log(newdata)