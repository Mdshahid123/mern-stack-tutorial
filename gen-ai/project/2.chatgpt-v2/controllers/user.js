
const path = require("path");
const conversationClass = require("../models/conversationModel");

// =========================
// Show Home Page
// =========================

function showHomePage(req, res) {
    const filePath = path.join(__dirname, "../public/index.html");
    res.sendFile(filePath);
}

// =========================
// Call Gemini LLM
// =========================

async function callToLlm(req, res) {

    const { prompt, conversationId } = req.body;

    let conversationDocument;

    try {


        // =========================
        // Create or Load Conversation
        // =========================

        if (!conversationId) {

            conversationDocument = new conversationClass({

                title: prompt.substring(0, 30),

                messages: [
                    {
                        role: "user",
                        text: prompt
                    }
                ]

            });

            await conversationDocument.save();

        } else {

            conversationDocument = await conversationClass.findById(conversationId);

            if (!conversationDocument) {

                return res.status(404).json({
                    success: false,
                    message: "Conversation not found"
                });

            }

            conversationDocument.messages.push({

                role: "user",
                text: prompt

            });

        }

        // =========================
        // Gemini API Call
        // =========================

        // send a whole converstaion history not just current prompt
        const contents = conversationDocument.messages.map(msg => ({
            role: msg.role === "ai" ? "model" : "user",
            parts: [
                {
                    text: msg.text
                }
            ]
          }));

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,

            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    contents
                })

            }

        );

        const data = await response.json();

        const message =
            data?.candidates?.[0]?.content?.parts?.[0]?.text
            || "No response generated.";

        // =========================
        // Save AI Response
        // =========================

        conversationDocument.messages.push({

            role: "ai",
            text: message

        });

        await conversationDocument.save();

        // =========================
        // Send Response
        // =========================

        res.status(200).json({

            success: true,
            message,
            conversationId: conversationDocument._id

        });

    }
    catch (error) {

        console.log(error);
        
        res.status(500).json({success: false, error: error.message });

    }

}


// Get All Conversations
async function getAllConversations(req, res) {

    try {

        const conversations = await conversationClass.find({},"title createdAt").sort({ createdAt: -1 });

        res.status(200).json({ success: true, conversations });

    }
    catch (error) {

        console.log("error while finding a all conversations:",error)
        res.status(500).json({ success: false, error: error.message });

    }

}

// Get One Conversation
async function getConversation(req, res) {

    try {

        const conversation =await conversationClass.findById( req.params.id );

        if (!conversation) {
             return res.status(404).json({success: false,message: "Conversation not found"
        });

        }

        res.status(200).json({ success: true,conversation});

    }
    catch (error) {
        res.status(500).json({success: false,error: error.message });

    }

}

module.exports = {
    showHomePage,
    callToLlm,
    getAllConversations,
    getConversation
};