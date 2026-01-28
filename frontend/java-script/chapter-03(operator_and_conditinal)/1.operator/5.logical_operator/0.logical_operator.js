// logical-operator:Used to combine conditions and return boolean value(ture or false)

// 1)Logical AND (&&):Returns true if both conditions are true.If any one is false → returns false.
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter");
} else {
  console.log("Access denied");
}

//2. Logical OR (||):Returns true if at least one condition is true.
// Returns false only if both are false.

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can rest today!");
}


// 3. Logical NOT (!)
// Reverses the boolean value.
// If condition is true → becomes false.
// If false → becomes true.

let raining = false;

if (!raining) {
  console.log("You can go outside");
}

