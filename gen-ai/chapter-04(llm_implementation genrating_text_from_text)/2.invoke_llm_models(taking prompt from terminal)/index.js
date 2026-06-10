// in this chapter we will maintain the conversation hystory which is called a context

// step-1 import the library
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();


//step-02 create a object using class
const ai = new GoogleGenAI({apiKey:process.env.apiKey});


// step-3 make api call
async function main(prompt) {
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:prompt
  });
  console.log("model:",response.text)
}


// taking user input from the termianl
process.stdout.write("hey i am your llm ask anything:")
process.stdin.on("data",async (input)=>{
// parsing the buffer format data in to the readable string
      let  prompt=input.toString().trim()
      console.log("you asked:",prompt)
      try {
        await main(prompt)
        
      } catch (error) {
         console.log(error.message)
      }

})



 
