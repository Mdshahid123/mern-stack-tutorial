// in this chapter we will maintain the conversation hystory which is called a context

// step-1 import the library
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();


// step-02 create a class object
const ai = new GoogleGenAI({apiKey:process.env.apiKey});


// step-3 make api call
async function main() {
  
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: [
      {
        role:"user",
        parts:[{text:"hello chatgpt"}]
      },
      {
        role:"model",
        parts:[{text:"Hello! I'm actually Gemini, an AI built by Google, but I'm happy to help you. What can I do for you today?"}]
      },
      {
          role:"user",
          parts:[{text:"hey chat gpt my name is shahid,how are you"}]
      },
      {
        role:"model",
        parts:[{text:"Hello Shahid! It's great to meet you. I'm doing really well, thank you for asking! How are you doing today? How can I help you out?"}]
      },
      {
        role:"user",
        parts:[{text:"what is my name"}]
      }

    ]
  });
  console.log(response.text)
}

await main()



 
