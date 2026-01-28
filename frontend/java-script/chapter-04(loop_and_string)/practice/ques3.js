// prompt a user to enter a their full name and genrate a username for them based on the input start username with @,followed by their full name and ending with the full name length.

//example:for fullname:shahid his username should be @shahid6

let fullname = prompt("enter your name")
let userlength = fullname.length
let username = `@${fullname}${userlength}`
console.log(username)
