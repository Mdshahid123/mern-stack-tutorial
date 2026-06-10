import Heading from "./component/Heading"
import Display  from "./component/Display"
import ButtonContainer from "./component/ButtonContainer"
import {useState} from "react"
import "./app.css"

function App()
{

  const [state,setState]=useState("")

  function handleClick(item)
  {      

      // setState(item)
      if(item==="C")
      {
            setState("")

      }
      else if(item==="=")
      {
            try{
            setState(eval(state));
            }
            catch(error)
            {
            setState("Error");
            }  
      }
      else
      {
            

          setState(state + item)
      }

  }
      return (

      <div className="appContainer">

            {/* heading componenet */}
      
            <Heading></Heading>
      
      
            {/* display box */}
      
            <Display output={state}></Display>
      
            {/* button container */}
      
            <ButtonContainer handleClick={handleClick}></ButtonContainer>

      </div>



      )
}


export default App