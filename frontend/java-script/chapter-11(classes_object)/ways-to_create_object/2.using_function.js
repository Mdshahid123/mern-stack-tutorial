//2) using constructor function

//what is constructor fucntion?

//function that call automatically during the object creation 
//so what ever the code we will write it will be execute but usefull to write a code that intialize the object 
// becz behind the scene new call the constructor function by hoping that constrctor fucntion will itilize the my created empty  object


function student(name,age,city)
{
   
     this.name=name;
     this.age=age;
     this.city=city;

}

student.prototype.sayHi=()=>{
     console.log(`hi ${this.age}`)
}


let st1=new student("harsh",20,"delhi")
let st2=new student("dhuv",20,"mubai")

console.log(st1)





// new keyword does internally:
// let obj = {};                            // 1 create empty object
// obj.__proto__ = Student.prototype;       // 2 set prototype
// Student.call(obj, "Shahid", 21);         // 3 run function with obj as this
// return obj;                              // 4 return created object
