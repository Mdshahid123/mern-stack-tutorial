// template or construtor function
function student(myname,myage,mycity)
{
     this.name=myname,
     this.age=mycity,
     this.city=mycity
}

// creating a object

const student1= new student("harsh","delhi",24)
const student2=new student("dhruv","mumbai",19)


console.log(student1)
console.log(student2)

