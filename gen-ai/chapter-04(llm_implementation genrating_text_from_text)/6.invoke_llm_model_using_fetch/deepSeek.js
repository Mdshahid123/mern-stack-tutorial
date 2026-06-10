import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.deepSeekApiKey;
async function chatMe(prompt) {
  const response = await fetch(
    "https://api.deepseek.com/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    }
  );

  console.log("response",response)
  const data = await response.json();
  console.log("data",data)
}
chatMe("Explain JavaScript closures");