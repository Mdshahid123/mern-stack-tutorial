import { useState,useEffect } from "react";

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
      let randoMName=names[randomIndex]
       setUser({...user,name:randoMName}) 
   }
      useEffect(()=>{
          console.log(user.name)
        },[user])
        

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




