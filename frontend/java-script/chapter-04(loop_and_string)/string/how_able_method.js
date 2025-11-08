// if string is not a object then how do we still call methods like str.toUpperCase()?

// Because of autoboxing (also called wrapper object creation).
// When you call a method on a primitive string, JavaScript temporarily wraps it inside a String object, which does have methods.

let str = "hello";

// Step 1: JS converts the primitive to an object
// internally like this:
let temp = new String(str);

// Step 2: Calls the method on the temporary object
temp.toUpperCase();

// Step 3: Destroys the temporary object after use
