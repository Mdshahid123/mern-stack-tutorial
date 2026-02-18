//there are build in method(function) to manipulate a string
//please note that string method doesn't modifi the orginal string bcz
//string is immutable(primitive data type) so it return new string.

//toUpperCase():
let str1 = "shahid"
let newstr1 = str1.toUpperCase(str1)
console.log(newstr1)
console.log(str1)

//toLowerCase():
let str2 = "SHAHID"
let newstr2 = str2.toLowerCase(str2)
console.log(newstr2)

//trim():remove white space from start and end
let str3 = "       hey how are you        "
let newstr3 = str3.trim()
console.log(newstr3)

//str.slice(startidx,endindx):
let str4 = "slice"
let newstr4= str4.slice()
let newstr5 = str4.slice(0,str4.length)
let newstr6 = str4.slice(2,4)
console.log(newstr4)
console.log(newstr5)
console.log(newstr6)
console.log(str4)

//str.concat():
let str5 = "concat1"
let str6 = "concat2"
let newstr56 = str5.concat(str6)
console.log()

//str.replace(searchvalue,newvalue):
let str7 = "replacerther"
let newstr7 = str7.replaceAll("er", "ba")
console.log(newstr7)


//charAt(index-value)-it will return the index of index-value
let str8="shahid"
console.log("hi",str8.charAt(0))
