// stpe-01  import google geminai sdk

import { GoogleGenAI } from "@google/genai";


//creating a  object 
const client=new GoogleGenAI({apiKey:process.env.env})


// api call
async function chatMe(prompt)
{ 
  try {
    const response=await client.models.generateContent([
        {
             role:"user",
             contents:[]
        }
        {

        }
    ])
    console.log(response.text)

    }catch(error){
       console.log(error)
    }
 }


chatMe("hey chat gpt how are you")

