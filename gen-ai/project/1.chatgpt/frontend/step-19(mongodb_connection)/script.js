const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const welcomeScreen = document.getElementById("welcome-screen");
const newChatBtn = document.getElementById("new-chat-btn");
const chatList = document.getElementById("chat-list");

let currentConversationId = null;


// =======================
// Event Listeners
// =======================

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        sendMessage();
    }

});

newChatBtn.addEventListener("click", newChat);


// =======================
// Send Message
// =======================

async function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    // Create conversation if none selected
    if (!currentConversationId) {

        await newChat();

    }

    addMessage(text, "user");

    input.value = "";

    input.focus();

    showTypingIndicator();

    try {

        const response = await fetch(
            "http://localhost:5000/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                    prompt: text,

                    conversationId:
                    currentConversationId

                })

            }
        );

        const data =
        await response.json();

        removeTypingIndicator();

        addMessage(
            data.reply,
            "ai"
        );

        // Refresh sidebar title
        loadConversations();

    } catch (error) {

        console.log(error);

        removeTypingIndicator();

    }

}


// =======================
// Add Message To UI
// =======================

function addMessage(text, role) {

    const message =
    document.createElement("div");

    message.classList.add(
        "message",
        role
    );

    const avatar =
        role === "user"
        ? "👤"
        : "🤖";

    message.innerHTML = `
        <div class="avatar">
            ${avatar}
        </div>

        <div class="message-content">
            ${text}
        </div>
    `;

    welcomeScreen.style.display =
    "none";

    messages.appendChild(message);

    messages.scrollTop =
    messages.scrollHeight;

}


// =======================
// Typing Indicator
// =======================

function showTypingIndicator() {

    const typing =
    document.createElement("div");

    typing.classList.add(
        "message",
        "ai"
    );

    typing.id =
    "typing-indicator";

    typing.innerHTML = `
        <div class="avatar">
            🤖
        </div>

        <div class="message-content">
            Typing...
        </div>
    `;

    messages.appendChild(typing);

    messages.scrollTop =
    messages.scrollHeight;

}

function removeTypingIndicator() {

    const typing =
    document.getElementById(
        "typing-indicator"
    );

    if (typing) {

        typing.remove();

    }

}


// =======================
// Create New Chat
// =======================

async function newChat() {

    try {

        const response =
        await fetch(
            "http://localhost:5000/conversation",
            {
                method: "POST"
            }
        );

        const data =
        await response.json();

        currentConversationId =
        data._id;

        messages.innerHTML = "";

        welcomeScreen.style.display =
        "flex";

        input.focus();

        loadConversations();

    } catch (error) {

        console.log(error);

    }

}


// =======================
// Load All Conversations
// =======================

async function loadConversations() {

    try {

        const response =
        await fetch(
            "http://localhost:5000/conversation"
        );

        const conversations =
        await response.json();

        chatList.innerHTML = "";

        conversations.forEach(
            (chat) => {

                const div =
                document.createElement(
                    "div"
                );

                div.classList.add(
                    "chat-item"
                );

                div.textContent =
                chat.title;

                div.addEventListener(
                    "click",
                    () => {

                        loadConversation(
                            chat._id
                        );

                    }
                );

                chatList.appendChild(
                    div
                );

            }
        );

    } catch (error) {

        console.log(error);

    }

}


// =======================
// Load One Conversation
// =======================

async function loadConversation(id) {

    try {

        const response =
        await fetch(
            `http://localhost:5000/conversation/${id}`
        );

        const conversation =
        await response.json();

        currentConversationId =
        id;

        messages.innerHTML = "";

        welcomeScreen.style.display =
        "none";

        conversation.messages.forEach(
            (msg) => {

                addMessage(
                    msg.text,
                    msg.role
                );

            }
        );

    } catch (error) {

        console.log(error);

    }

}


// =======================
// Initial Load
// =======================

loadConversations();