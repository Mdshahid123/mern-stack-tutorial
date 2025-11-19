// class
class student
{
    constructor(name,age)
    {
        //  whatever the  data you want in your object write here
        this.name=name
        this.age=age
    }

    // what ever the function you want in your object  write here

    getname()
    {
        return this.name
    }

    getage()
    {
      return this.age
    }
}



let st1= new student("shahid",24)
console.log(st1.__proto__)
console.log(st1.prototype)


// advantage

// method is not present in object instead it is present it's prototype
// object has only data
