// stpe-01 import google geminai package or module or sdk
const googleGeminai=require("@google/genai") // this is a third  party module or package so we have install it


const dotenv=require("dotenv")
dotenv.config();


// stpe-02 create a object with the help of class 
//let AI=new googleGeminai.GoogleGenAI()//it will create empty object  AI={}

let AI=new googleGeminai.GoogleGenAI({apiKey:process.env.apiKey})//it will create object with apikey as a property   


//stpe-03 now make a api call to the  google geminai server 
async function main()
{
 
  let response=await AI.models.generateContent({model:"gemini-3.5-flash", contents:"hey chat gpt how are you"})//api call kara hain llm model ko invoke krne ke liye
  
  console.log(response)//now full filled 
  console.log(response.text)//now we have a response text
    
}

main()











