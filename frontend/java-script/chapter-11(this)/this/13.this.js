// what is call() fucntion:call() fucntion  fucntion ke upar lagaya jata hai like jb us fucntion ko call kiya jaye toh this kise point kare


function sayHi()
{
      console.log(`hi ${this.username}`)
}

let st1={
  username:"raj",
  age:20,
  city:"new delhi",
  // sayHi:function(){
  //    console.log(`hi ${this.username}`)
  // }

}


let st2={
  username:"maharaj",
  age:20,
  // sayHi:function()
  // {
  //   console.log(`hi ${this.username}`)
  // }


}

sayHi.call(st1)


