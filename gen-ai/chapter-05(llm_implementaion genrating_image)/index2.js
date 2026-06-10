// dummy api call


// step-01 import module
import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();


// step-02 create a object wuith class
const openai = new OpenAI({apiKey: process.env.apiKey});


// make duumy  api request to llm model 
function generateImage(prompt){
    const binaryImage="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO7Z0xQAAAAASUVORK5CYII="
     
    const filePath="./genrated-image.png"
    fs.writeFile(filePath,imageBinary,(error)=>{
  
      if(error)
      {
          console.log("error while saving a genrated image")
      }
  
      else{
            console.log("successfully save a generated image")
      }
  
    })
  } 
  
generateImage("A futuristic AI robot coding on a laptop in a modern office");


                  




