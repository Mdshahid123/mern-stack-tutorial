// for a given array with marks of students->[85,70,45,66,78] in a class
// find a avg marks of class

let arr = [85, 70, 45, 66, 78]

let sum = 0

for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

}
console.log(sum)

let avg = sum / arr.length
console.log(avg);