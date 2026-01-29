//devide the 8.8 by 7 and round off the result to one decimal place
let a=8.8;
let b=7;
console.log(a / b.toFixed(2)); // 1.3
     //or
console.log(Math.round((a / b) * 100) / 100); // 1.3  