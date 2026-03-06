import {countryList} from "./code.js";
console.log(countryList)
let allSelect=document.querySelectorAll("select")
for(let select of allSelect)
{
  //inserting option in select tag
  for(let currCode in countryList)
  {
      let option=document.createElement("option")
      option.innerText=currCode
      option.value=currCode
      select.append(option)
  }

//on changing 
select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
  })
}
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
