const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({

    title: {
        type: String,
        default: "New Chat"
    },

    messages: [

        {
            role: {
                type: String,
                required: true
            },

            text: {
                type: String,
                required: true
            }
        }

    ]

}, { timestamps: true });

module.exports = mongoose.model( "ConversationCollection",conversationSchema);
