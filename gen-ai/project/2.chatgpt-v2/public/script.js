const welcome_screen = document.querySelector("#welcome-screen");
const input_area = document.querySelector(".input-area");
const new_chat_btn = document.querySelector("#new-chat-btn");
const class_list = document.querySelector(".chat-list");
const messages = document.querySelector("#messages");

// Send Message Elements
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

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

window.addEventListener( "DOMContentLoaded",loadConversations);

// =======================
// Active Chat
// =======================

function setActiveChat(chatElement) {

    const allChats =document.querySelectorAll(".chat-item");

    allChats.forEach(chat => {
        chat.classList.remove("active");
    });

    chatElement.classList.add("active");

}

// =======================
// Send Message
// =======================

async function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    const isNewConversation =currentConversationId === null;

    welcome_screen.style.display = "none";

    input_area.style.top = "550px";

    showMessage(text, "user");

    input.value = "";

    input.focus();

    showTypingIndicator();

    try {

        const response = await fetch("/llm", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                prompt: text,

                conversationId:currentConversationId

            })

        });

        const data =await response.json();//it will collect all chunks ,parse it ,concatente it then return 

        removeTypingIndicator();

        // Create sidebar item
        if (isNewConversation) {

            const windowName = document.createElement("div");

            windowName.classList.add("chat-item");

            windowName.innerText =text.substring(0, 30);

            windowName.dataset.id = data.conversationId;

            windowName.addEventListener("click",() => {

            setActiveChat(windowName);

            loadConversation( data.conversationId);

            }

            );

            setActiveChat( windowName);

            class_list.prepend(windowName);

        }

        currentConversationId = data.conversationId;

        showMessage( data.message, "AI");

    }
    catch(error) {

        console.log(error);

        removeTypingIndicator();

    }

}

// =======================
// Show Message
// =======================

function showMessage(text, role) {

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

    messages.appendChild(
        message
    );

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

    messages.appendChild(
        typing
    );

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
// New Chat
// =======================

new_chat_btn.addEventListener( "click", () => {

        currentConversationId =null;

        messages.innerHTML = "";

        welcome_screen.style.display = "block";

        input_area.style.top = "300px";

        document.querySelectorAll(".chat-item" ).forEach(chat => {
              chat.classList.remove("active");

          });
    }
);


// =======================
// Load All Conversations
// =======================

async function loadConversations() {

    try {

        const response = await fetch( "/conversations");

        const data = await response.json();

        class_list.innerHTML = "";

        data.conversations.forEach(conversation => {

        const chatItem = document.createElement( "div");

        chatItem.classList.add( "chat-item");

        chatItem.innerText =conversation.title;

        chatItem.dataset.id =conversation._id;

        chatItem.addEventListener("click", () => {
                     setActiveChat(chatItem);
                    loadConversation(conversation._id );

             });


            class_list.appendChild( chatItem );

            }
        );

    }
    catch (error) {

        console.log(error);

    }

}

// =======================
// Load One Conversation
// =======================

async function loadConversation(conversationId) {

    try {

        const response = await fetch(`/conversations/${conversationId}` );

        const data = await response.json();

        const conversation =data.conversation;

        currentConversationId =conversation._id;

        messages.innerHTML = "";

        welcome_screen.style.display = "none";

        input_area.style.top ="550px";

        conversation.messages.forEach(message => {

        showMessage( message.text, message.role === "ai" ? "AI" : "user");
        
        });

    }
    
    catch (error) {
        console.log(error);
    }

}