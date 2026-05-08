
// ORIGINAL JS (UNCHANGED)
document.querySelectorAll(".heart").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();

    console.log(e.target)

    fetch("/favourite/" + id)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.classList.add("active");
          showMessage("✔ Added to Favourite", "success");
        } else {
          showMessage("⚠ Already in Favourite", "error");
        }
      })
      .catch(() => {
        showMessage("Something went wrong", "error");
      });
     });
});

function showMessage(text, type) {
  const msg = document.createElement("div");
  msg.innerText = text;
  msg.className = "success-msg";

  if (type === "error") {
    msg.style.background = "rgba(244, 67, 54, 0.95)";
  }

  document.body.appendChild(msg);

  setTimeout(() => msg.classList.add("hide"), 1500);
  setTimeout(() => msg.remove(), 2000);

 
}
