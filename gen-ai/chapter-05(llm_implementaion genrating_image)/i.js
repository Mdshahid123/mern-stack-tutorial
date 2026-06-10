import dotenv from "dotenv";
dotenv.config();

async function generateImage() {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [
          {
            role: "user",
            content: "Generate a beautiful sunset over mountains",
          },
        ],
      }),
    });
   // console.log(response)
     let data=await response.json()//it will parse the response.body into the js object format
     console.log(data)
  } catch (err) {
    console.error(err);
  }
}

generateImage();