// step-01 import module
import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();


// step-02 create a object wuith class
const openai = new OpenAI({apiKey: process.env.apiKey});


// make api request to llm model 
async function generateImage(prompt){


  try {
    const promise = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024"
    });
    
    const imageBase64 = promise.data[0].b64_json;//base_64 string format
    const imageBinary= Buffer.from(imageBase64, "base64")//converting in the binary (decoding)
    const filePath="./genrated-image.png"
    fs.writeFile(filePath,imageBinary,(error)=>{
  
      if(error)
      {
          console.log("error while saving a genrated image")
      }
  
      else{
            console.log("successfully save a genrated image")
      }
  
    })
  } catch (error) {
        console.log("error while api call:",error)
  }
}

generateImage("A futuristic AI robot coding on a laptop in a modern office");


                  




