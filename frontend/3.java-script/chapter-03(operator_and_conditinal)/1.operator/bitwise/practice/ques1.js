// Swapping two numbers without temp
a = 5; b = 7;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b); // 7, 5
