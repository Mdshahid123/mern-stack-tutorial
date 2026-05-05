//import  code.js
import { countryList } from "./code.js"
//getting a left and right select tag
let selects=window.document.querySelectorAll("select")

//making left drop down menu
for(let select of selects )
{
  for(let currencyCode in countryList)
  {
    let element=document.createElement("option")
    element.innerText=currencyCode
    element.value=currencyCode
    select.prepend(element)
  }
  //on changing 
  select.addEventListener("change",(evt)=>{
          updateFlag(evt.target)
    })
  //
  function updateFlag(element){
      let currencyCode=element.value
      let countryCode=countryList[currencyCode]
      console.log(countryCode)
      let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`
      let img= element.parentElement.querySelector("img")
      console.log(img)
      img.src=newsrc
  }
}

// output
//output 
let button=document.querySelector("button")
button.addEventListener("click",(evt)=>{
let amountTag=document.querySelector("#amount_input")
console.log(amountTag)
console.log(amountTag.value)

})



