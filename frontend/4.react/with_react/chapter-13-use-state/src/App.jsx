// updtaing a ui value without use state
function App() {

  let count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return (
    <div>

      <h1>count={count}</h1>

      <button onClick={increase}>
        Increase
      </button>

    </div>
  )
}
export default App

// Problem:
// console me value change hogi
// UI update nahi hoga