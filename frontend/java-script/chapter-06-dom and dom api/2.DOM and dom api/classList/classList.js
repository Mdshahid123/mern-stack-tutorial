
let h1=document.querySelector("h1")

//printing all classess of the given element
console.log(h1.classList)

//adding a class to the element
h1.classList.add("size","colour")

//removing a class of the given element
//h1.classList.remove("colour");

//toggle() — Add/remove automatically
// If the class exists → remove
// If not → add
h1.addEventListener("click",()=>{
  h1.classList.toggle("colour");

})

//ontains() — Check if a class exists
box.classList.contains("big"); // true

//replace() — Replace a class
box.classList.replace("big", "small");