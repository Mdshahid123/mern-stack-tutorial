// Conditional statements are used to make decisions in your code —they tell the cpu to execute certain code only if a condition is true.

// example:If it’s raining, take an umbrella. Otherwise, go without it.


//1)if Statement:Runs a block of code only if the condition is true.

let age1 = 18;

if (age1 >= 18) {
  console.log("You can vote");
}

//Output: You can vote
//(because the condition age >= 18 is true)


// 2)if...else Statement:Runs one block if the condition is true, otherwise runs another block.

let age2 = 16;

if (age2 >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
//Output: You cannot vote

//3)if...else if...else Statement:Used when you have multiple conditions.

let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
//Output: Grade B

//4)A shortcut for if...else — used for simple conditions.
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";

console.log(result);  // Output: Adult

// 5)switch statment:
