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
      let randoMName=names[randomIndex]
       setUser({...user,name:randoMName}) 
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



// how it work

// new object create hua
// new reference bana
// React re-render karega
// UI update hogi


// problem:
// state ko update kr ne wala method setState() ek asychronus fucntion hain,mtlb ye time leta hain state variable ki vaule ko update krne main 

// so jase ki hum jante hain ki jb bhi koi time taking task hota hain toh nodejs use backrgound main alag thread pe execute akrwata hain our immidiately next code ko execute krta hain 

// so yaha pe console.log(user.name) previus value ko hi prinit kare ga na ki current updated name ko kiyu ki object ka name abhi update nahi hua hain abbhi under process main hain

// agar current updated value dekhi nahi toh hame useeefect use krna chaiye



