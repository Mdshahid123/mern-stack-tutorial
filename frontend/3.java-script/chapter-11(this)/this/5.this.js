let student={
  name:"raj",
  age:20,
  sayHi:function(){
    console.log(this)
    console.log(`hi ${this.name}`)
  },
  address:{
       city:"new delhi",
       pincode:110055,
       area:"karo bagh",
       getaddress:function(){
            console.log(this)
       }
     }
}

student.address.getaddress()