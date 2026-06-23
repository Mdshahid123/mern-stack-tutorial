const sendBtn=document.querySelector(".inputArea button")
const msgInput=document.querySelector(".inputArea input")
const inputArea=document.querySelector(".inputArea")
const welcomeScreen=document.querySelector(".welcome-screen")
const rightbar=document.querySelector(".rightbar")
const newChatBtn = document.querySelector(".newChat");
let chats = JSON.parse(localStorage.getItem("chats")) || [];


// jb key press kya jaye  jabhi hame msg send karna hain
msgInput.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){
        sendMessage();
    }

});

// our agra click kiya jaye  send button pe tabhi msg send karna hain
sendBtn.addEventListener("click",sendMessage)


function sendMessage()
{

    //set the msginput to bottom
   inputArea.style.top="87vh"

   //hide the welcome message
   welcomeScreen.style.display = "none";

   //get value of message input 
   let prompt=msgInput.value.trim()
   if(prompt==="")
    return
   addMessage(prompt,"user")
   msgInput.value=""
   msgInput.focus();

   //Simulate AI response after 1 second
   setTimeout(() => {
   
      addMessage("Tell me how i can help ?","AI");
   
   }, 1000);


}


function addMessage(text,role) {

    //creae  message element with prompt
    let div=document.createElement("div")
    const avatar = role === "user" ? `<span class="material-symbols-outlined">person</span> ` : `  <span class="material-symbols-outlined"> robot_2 </span>`;
    console.log("role:",role)
    div.classList.add(`${role}Message`)
    div.innerHTML=`${avatar}<p>${text}</p>`
    //append in right bar
    rightbar.appendChild(div)
    rightbar.scrollTop = rightbar.scrollHeight;
   
}

//new chat implemntaion
newChatBtn.addEventListener("click", newChat);
function newChat(){

    const userMessage=document.querySelectorAll(".userMessage")
    const AIMessage=document.querySelectorAll(".AIMessage")

    for(let item of userMessage)
    {
        item.innerHTML=""
        item.innerHTML=""

    }

    for(let item of AIMessage)
    {
        item.innerHTML=""
        item.innerHTML=""

    }

    welcomeScreen.style.display = "block";
     inputArea.style.top="50vh"

    input.focus();
}

