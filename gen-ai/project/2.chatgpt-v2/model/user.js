async function callToLlm()
{
        


      console.log(req.body)

                  try {

                      const { prompt, conversationId } = req.body;

                      const conversation =
                          await Conversation.findById(
                              conversationId
                          );

                      if (!conversation) {

                          return res.status(404).json({
                              reply: "Conversation not found"
                          });

                      }

                      // Save user message

                      conversation.messages.push({
                          role: "user",
                          text: prompt
                      });

                      // Gemini API Call

                      const response = await fetch(
                          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
                          {
                              method: "POST",

                              headers: {
                                  "Content-Type":
                                      "application/json"
                              },

                              body: JSON.stringify({
                                  contents: [
                                      {
                                          parts: [
                                              {
                                                  text: prompt
                                              }
                                          ]
                                      }
                                  ]
                              })
                          }
                      );

                      const data =
                          await response.json();

                      const reply =
                          data.candidates?.[0]
                              ?.content?.parts?.[0]
                              ?.text ||
                          "No response generated";

                      // Save AI message

                      conversation.messages.push({
                          role: "ai",
                          text: reply
                      });

                      // Update title on first message

                      if (
                          conversation.title ===
                          "New Chat"
                      ) {

                          conversation.title =
                              prompt.substring(0, 30) +
                              (
                                  prompt.length > 30
                                      ? "..."
                                      : ""
                              );

                      }

                      await conversation.save();

                      res.json({
                          reply
                      });

                  } catch (error) {

                      console.log(error);

                      res.status(500).json({
                          reply:
                              "Something went wrong"
                      });

                  }

}

function showHomePage(req,res)
{
        res.sendfile(filepath,) 
}