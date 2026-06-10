//import
import { countryList } from "./code.js"
let select=window.document.querySelectorAll("select")
//we are going to select a left select tag
for(let currencyCode in countryList)
{
  let element=document.createElement("option")
  element.innerText=currencyCode
  element.value=currencyCode
  select[0].append(element)
}
// now you have to make a right drop down menu