personName="john"
function getscore()
{
  var num1=2
  num2=3
   
  function add(){
    return personName + "scored"+(num1+num2)
  }
   return add()
}

console.log(getscore())
