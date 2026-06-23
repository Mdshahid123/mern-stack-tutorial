import Card from "./App";

function App() {

  return (

    <div>

      <Card>

        <h1>React Course</h1>

        <p>Learn MERN Stack Development</p>

        <button>Start Learning</button>

      </Card>

    </div>

  )
}

export default App;


// internally child component call like this
// Card({
//   children: [
//     <h1>React Course</h1>,
//     <p>Learn MERN Stack Development</p>,
//     <button>Start Learning</button>
//   ]
// });


