// Get elements
const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

// Buttons
const uppercaseBtn = document.querySelector(".uppercase");
const lowercaseBtn = document.querySelector(".lowercase");
const capitalizeBtn = document.querySelector(".capitalize");
const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");

// Update output as user types
inputField.addEventListener("input", () => {
  outputField.textContent = inputField.value ?inputField.value:"Output";
});

// Text Transform Buttons
uppercaseBtn.addEventListener("click", () => {
  outputField.style.textTransform = "uppercase";
  setActive(uppercaseBtn);
});

lowercaseBtn.addEventListener("click", () => {
  outputField.style.textTransform = "lowercase";
  setActive(lowercaseBtn);
});

capitalizeBtn.addEventListener("click", () => {
  outputField.style.textTransform = "capitalize";
  setActive(capitalizeBtn);
});

// Font Style Buttons
boldBtn.addEventListener("click", () => {
  toggleStyle(boldBtn, "fontWeight", "bold", "normal");
});

italicBtn.addEventListener("click", () => {
  toggleStyle(italicBtn, "fontStyle", "italic", "normal");
});

underlineBtn.addEventListener("click", () => {
  toggleStyle(underlineBtn, "textDecoration", "underline", "none");
});

//Function to toggle style and button highlight
function toggleStyle(button, styleProp, onValue, offValue) {
  if (outputField.style[styleProp] === onValue) {
    outputField.style[styleProp] = offValue;
    button.classList.remove("active");
  } else {
    outputField.style[styleProp] = onValue;
    button.classList.add("active");
  }
}

// Highlight only one transform button at a time
function setActive(activeBtn) {
  [uppercaseBtn, lowercaseBtn, capitalizeBtn].forEach((btn) =>
    btn.classList.remove("active")
  );
  activeBtn.classList.add("active");
}
