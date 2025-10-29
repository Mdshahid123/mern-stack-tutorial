// global scope
let c=10

function fun()
{

  console.log(c)
  let a=9
  if(true)
  { console.log(c)
    var b=8
  }
  c=10
}
fun()
//console.log(b)