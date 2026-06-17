const sendBtn=document.querySelector(".inputArea button")
const msgInput=document.querySelector(".inputArea input")
const inputArea=document.querySelector(".inputArea")
const welcomeScreen=document.querySelector(".welcome-screen")
const rightbar=document.querySelector(".rightbar")
const newChatBtn = document.querySelector(".newChat");
let chats = JSON.parse(localStorage.getItem("chats")) || [];


// key press kya jata hain jabhi hame msg send karna hain
msgInput.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){
        sendMessage();
    }

});

// our agra click krta hain send button pe tabhi msg send karna hain
sendBtn.addEventListener("click",sendMessage)


function sendMessage()
{

    //set the msginput to bottom
   inputArea.style.top="87vh"

   //hide the welcome message
   welcomeScreen.style.display = "none";

   //get value of message input 
   let prompt=msgInput.value.trim()
   addMessage(prompt,"user")
   msgInput.value=""
   msgInputinput.focus();

   //Simulate AI response after 1 second
   setTimeout(() => {
   
      addAIMessage("I received your message!","AI");
   
   }, 1000);

   // automatic scroll
   rightbar.scrollTop = rightbar.scrollHeight;
   
   
    
    
}


function addAIMessage(text,role) {



    //creae user message element with prompt
    let div=document.createElement("div")
    div.classList.add(`${role}Message`)
    div.innerHTML=`
                       <span class="material-symbols-outlined">
                           person
                        </span> 
                        <p>hello${text}</p>
    `
    
    //append in right bar
    rightbar.appendChild(div)
}

newChatBtn.addEventListener("click", newChat);
function newChat(){

    rightbar.innerHTML = "";

    welcomeScreen.style.display = "flex";

    input.focus();
}

