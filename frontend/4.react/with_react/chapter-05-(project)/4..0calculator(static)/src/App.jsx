import Heading from "./component/Heading"
import Display  from "./component/Display"
import ButtonContainer from "./component/ButtonContainer"
import "./app.css"

function App()
{

      return (

      <div className="appContainer">

            {/* heading componenet */}
      
            <Heading></Heading>
      
      
            {/* display box */}
      
            <Display ></Display>
      
            {/* button container */}
      
            <ButtonContainer ></ButtonContainer>

      </div>


      )
}


export default App