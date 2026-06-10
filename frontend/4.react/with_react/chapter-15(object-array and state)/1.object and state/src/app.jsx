import { useState } from "react";

function App() {

  const [user, setUser] = useState({name: "Shahid",age: 21,course: "MERN Stack"});

  function changeName()
  {
         const names = [
      "Aarav",
      "Zayan",
      "Rehan",
      "Kabir",
      "Faizan",
      "Rohan"
    ];

      const randomIndex = Math.floor(Math.random() * names.length );
       user.name=names[randomIndex]
       setUser(user) 
       console.log(user.name)
  }

  return (

    <div>

      <h1>Name : {user.name}</h1>

      <h2>Age : {user.age}</h2>

      <h2>Course : {user.course}</h2>

      <button onClick={changeName}>change Name</button>

    </div>

  )
}
export default App;

// problem is that we are updating a value of existing object 
// changing a value of object doen't means we are changing a object 
// that's why we are not actually changing the avlue of stsate variuable
//tha't why componenent rerender nahi ho raha hain
//jiske wajah se updated ui nahi show ho raha hain
