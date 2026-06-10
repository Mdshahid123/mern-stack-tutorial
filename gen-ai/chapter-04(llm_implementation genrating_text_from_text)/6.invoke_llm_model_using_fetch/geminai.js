import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.apiKey}`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({contents:[{role:"user",parts:[{text:"hey chat gpt how are you"}]}]})
      }
    );
    const data = await response.json();

    console.log(data);

    // Extract generated text
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    console.log(text);
  } catch (error) {
    console.error(error);
  }
}

main();


// -----------------------------------some imp pointes----------------------------------


// contents = [
//   message1,
//   message2,
//   message3
// ]


// message={ role: "user",parts:[{text:"hey chat gpt"}]}

