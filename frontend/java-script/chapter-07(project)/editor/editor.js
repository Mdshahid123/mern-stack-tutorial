// getting input and output element
let container_input=document.querySelector(".container_input")
let container_output=document.querySelector(".container_output")

// Update output as user types
container_input.addEventListener("input",()=>{
   container_output.textContent=container_input.value?container_input.value :"output"
})

// getting transform element
const uppercaseBtn = document.querySelector(".uppercase");
const lowercaseBtn = document.querySelector(".lowercase");
const capitalizeBtn = document.querySelector(".capitalize");
const boldBtn=document.querySelector(".bold");

uppercaseBtn.addEventListener("click", () => {
  container_output.style.textTransform = "uppercase";
  
});

lowercaseBtn.addEventListener("click", () => {
  container_output.style.textTransform = "lowercase";
  
});

capitalizeBtn .addEventListener("click",()=>{
    container_output.style.textTransform ="capitalize"
})

boldBtn.addEventListener("click",()=>{
     if (container_output.style.fontWeight === "bold") {
    container_output.style.fontWeight = "normal";
  } else {
    container_output.style.fontWeight = "bold";
  }
})


