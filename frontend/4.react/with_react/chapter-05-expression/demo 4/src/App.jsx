function App()
{  
      const fooditems=["daal","chini","mango"]

      return(
            <>
         <h1>food  items</h1>

         <ul>

               {
                  fooditems.map((item)=>{
                        return <li>{item}</li>
                  })
               }
                  
         </ul>
      </>
     )
}
export default App
