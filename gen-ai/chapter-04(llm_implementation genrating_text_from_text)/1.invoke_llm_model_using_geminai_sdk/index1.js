// import google geminai package or module or sdk
const googleGeminai=require("@google/genai") // this is a third  party module or package so we have to install it

import dotenv from "dotenv";
dotenv.config();

//let AI=new googleGeminai.GoogleGenAI()//it will create empty object  AI={}

let AI=new googleGeminai.GoogleGenAI({apiKey:process.env.apiKey})//it will create object with apikey as a property   



  let response=await AI.models.generateContent({model:"gemini-3.5-flash", contents:"hey chat gpt how are you"})//api call kara hain llm model ko invoke krne ke liye

  console.log(response)//will be pending
  console.log(response.text)//undefined 








//----------------------imp points---------------------------------------------------

//1) GoogleGenAI → client object
//2) generateContent() → API call


//3) @google/genai SDK is doing the fetch() internally.

// fetch("https://generativelanguage.googleapis.com/...", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "x-goog-api-key": API_KEY
//   },
//   body: JSON.stringify({
//     model: "gemini-2.5-flash",
//     contents: "Hello"
//   })
// });



