const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Conversation = require("./models/Conversation");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// =========================
// Chat Endpoint
// =========================

app.post("/chat", async (req, res) => {

    try {

        const {
            prompt,
            conversationId
        } = req.body;

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

});


// =========================
// Create Conversation
// =========================

app.post(
    "/conversation",
    async (req, res) => {

        try {

            const conversation =
                await Conversation.create({

                    title: "New Chat",

                    messages: []

                });

            res.status(201).json(
                conversation
            );

        } catch (error) {

            console.log(error);

            res.status(500).json({
                message:
                    "Failed to create conversation"
            });

        }

    }
);


// =========================
// Get All Conversations
// =========================

app.get(
    "/conversation",
    async (req, res) => {

        try {

            const chats =
                await Conversation.find()
                    .sort({
                        createdAt: -1
                    });

            res.json(chats);

        } catch (error) {

            console.log(error);

            res.status(500).json({
                message:
                    "Failed to fetch conversations"
            });

        }

    }
);


// =========================
// Get Single Conversation
// =========================

app.get(
    "/conversation/:id",
    async (req, res) => {

        try {

            const chat =
                await Conversation.findById(
                    req.params.id
                );

            if (!chat) {

                return res
                    .status(404)
                    .json({
                        message:
                            "Conversation not found"
                    });

            }

            res.json(chat);

        } catch (error) {

            console.log(error);

            res.status(500).json({
                message:
                    "Failed to fetch conversation"
            });

        }

    }
);


// =========================
// MongoDB Connection
// =========================

const dbPath =
    process.env.mongodb_cloud;

const port =
    process.env.PORT || 5000;

mongoose
    .connect(dbPath)
    .then(() => {

        console.log(
            "MongoDB connected successfully"
        );

        app.listen(
            port,
            () => {

                console.log(
                    `Server running on port ${port}`
                );

            }
        );

    })
    .catch((error) => {

        console.log(error);

    });