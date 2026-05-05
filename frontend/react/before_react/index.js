// Get the root div
const root = document.getElementById("root");

// Create navbar elements
const nav = document.createElement("nav");

const brand = document.createElement("h2");
brand.textContent = "MyWebsite";

const ul = document.createElement("ul");

const menuItems = ["Home", "About", "Services", "Contact"];

menuItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${item.toLowerCase()}`;
  a.textContent = item;
  li.appendChild(a);
  ul.appendChild(li);
});

// Append brand and ul to nav
nav.appendChild(brand);
nav.appendChild(ul);

// Add navbar to the page
root.appendChild(nav);
