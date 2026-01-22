//case2:


function fun()
{
   //local scope
   let a=89
   console.log(a)

   {
      console.log(a)
   }
}

fun()

console.log(a)