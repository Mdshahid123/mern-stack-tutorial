import { useState } from "react";

function App() {

  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Banana"
  ]);


  function addFruit() {

    // fruits.push("orange")

    // setFruits(fruits);

    // console.log(fruits)
    setFruits([...fruits,"orange"])
  }



  return (

    <div>

      {
        fruits.map((fruit,index)=>(

          <h1 key={index}>
            {fruit}
          </h1>

        ))
      }


      <button onClick={addFruit}>
        Add Fruit
      </button>


    </div>

  )
}

export default App;