import "./buttonContainer.css"
import Display from "./Display";
function ButtonContainer(props)
{

    const buttons = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    "0"
  ];

   return(
    

       <div className="buttonContainer">

          {buttons.map((item,index)=>{
               return <button key={index} onClick={()=>{
                      props.handleClick(item)
               }}>{item}</button>
          })}
               
       </div>
    
   )
}
export default ButtonContainer