import "./App.css";
function App()
{
  return(
    <>
    <div className="appContainer">

         {/* heading  */}
        <h1>Task Manager</h1>

        {/* input container */}
        <div className="inputContainer">
            <input className="text" type="text" placeholder="enter your task here.." />
            <input className="date" type="date" />
            <button>Add Task</button>
        </div>

        {/* task container */}
          <p className="empty">No tasks yet</p>
    </div>

    </>
  )
}

export default App