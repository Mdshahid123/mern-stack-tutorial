const obj={
  a:10,
  f1:function(){
    console.log(this)
    setTimeout(function(){
        console.log(this)
    },2000)
  },

  f2:()=>{
     console.log(this)
     setTimeout(()=>{
           console.log(this)
     },2000)
  }
}

obj.f1()
obj.f2()