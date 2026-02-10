//JavaScript Implicit Conversion

//In certain situations, JavaScript automatically converts data of one type to another data type. This is known as implicit conversion.


// 1️⃣ Boolean → Number (false → 0,true  → 1)
Examples:
console.log(1==true)
console.log(0==false)
console.log(45==true)
console.log(true+1)


// 2️⃣String(If a string looks like a number) → Number (Except +)
"10" - 2   // 8
"5" * 2    // 10
"6" / 3    // 2


//❌ If not a valid number:

"abc" - 1  // NaN



// 3️⃣ Number → String (Only with +)
// If any operand is a string, + does string concatenation.

10 + "5"   // "105"
"Hello" + 5 // "Hello5"
//This is why + is dangerous 😅

🔄 4️⃣ null → Number (⚠️ dangerous)
null → 0

null + 1     // 1
null == 0    // false (special rule)
null >= 0    // true 😵

🔄 5️⃣ undefined → Number
undefined → NaN

undefined + 1 // NaN


Special case:

null == undefined // true



🔄 6️⃣ Objects / Arrays → Primitive

Objects convert in two steps:

object → primitive → string/number


Examples:

[] + 1      // "1"
[1,2] + 1   // "1,21"
{} + 1      // "[object Object]1"


Why?

[] → ""

[1,2] → "1,2"




🔄 7️⃣ Any Value → Boolean (Truthy / Falsy)

Falsy values (ONLY these 👇):

false
0
-0
"" 
null
undefined
NaN


Everything else → truthy

Boolean("0")   // true
Boolean([])    // true
Boolean({})    // true



