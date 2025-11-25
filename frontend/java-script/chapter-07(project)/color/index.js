let boxes=document.querySelectorAll(".box")
let main=document.querySelector("main")
boxes.forEach((box)=>{
   box.addEventListener('click',()=>{
       let color=box.id
       main.style.backgroundColor=color
   })
})
