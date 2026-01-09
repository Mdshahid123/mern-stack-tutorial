const fs=require('fs')
const path=require('path')

exports.Home=class Home{
     constructor(homeName,pricePerNight,Location,rating,photourl){
         this.homeName=homeName
         this.pricePerNight=pricePerNight
         this.Location=Location
         this.rating=rating
         this.photourl=photourl
     }
 
     save(){
          Home.fetchAll((registeredHomes)=>{
          // saving the data in fake data base
          registeredHomes.push(this)
          const filePath=path.join(__dirname,'../','fakeDatabase','homes.json')
          fs.writeFile(filePath,JSON.stringify(registeredHomes),(error)=>{
                         console.log("error while writing:",error)
                    })
                    
             
          })
     }

     static fetchAll(callback){
             const filePath=path.join(__dirname,'../','fakeDatabase','homes.json')
             fs.readFile(filePath,(error,data)=>{
                 
                 console.log("file read:",error,data)
                 if(error)
                 {
                    callback([])
                 }
                 else{

                      callback(JSON.parse(data))
                 }
             })
     }

        
}

