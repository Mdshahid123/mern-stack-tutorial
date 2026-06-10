async function chatMe(prompt)
{
  const API_URL = "api";
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"Bearer apikey"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      stream: true,
      messages: [
        { role: "user", content: prompt }
      ]
    })
  });
  
  const reader = response.body.getReader();//getReader() stream ko read karne ke liye reader object deta hai
  const decoder = new TextDecoder();// textDecoder bytes ko string me convert karne ke liye object deta hain
  
  while (true) {
    const { done, value } = await reader.read();
  
    if (done) break;
  
    const chunk = decoder.decode(value);
  
    console.log(chunk);
  }

}

chatMe("what is tool calling and fucntion calling")