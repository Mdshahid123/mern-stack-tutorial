
const response = await fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    model: "gpt-4.1-mini",
    messages: [
      { role: "user", content: "What is AI?" }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);