
for(var i=0;i<5;i++)
{
  setTimeout(function(){
      console.log(i)
  },i*2000);
}


// What actually happens:

// Loop runs: i = 0, 1, 2, 3, 4

// Each iteration sets a timer to run after i * 2000 ms.

// But the setTimeout callback runs later, after the loop is finished.

// By the time the first callback runs, the loop has already finished — so i = 5.


