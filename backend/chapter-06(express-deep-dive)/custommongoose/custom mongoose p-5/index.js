const mongoose = require("./mongoose")

let object = new mongoose("5bhk", 5, "mumbai")

object.save((error) => {
  try {
    if (error) throw error
    console.log("successfully saved 1")

    let object2 = new mongoose("3bhk", 10, "delhi")
    object2.save((error) => {
      try {
        if (error) throw error
        console.log("successfully saved 2")

        object.fetch((error, data) => {
          try {
            if (error) throw error
            console.log(data)
            data.forEach((element )=> {
                 console.log(data)
            });
          } catch (err) {
            console.log("Fetch error:", err)
          }
        })

      } catch (err) {
        console.log("Save 2 error:", err)
      }
    })

  } catch (err) {
    console.log("Save 1 error:", err)
  }
})


//still it is bad practice 
//call back hell
//to many try catch block
//Hard to read

//REAL & CORRECT way (Professional)
//Convert to Promise + async/await and use ONE try...catch

