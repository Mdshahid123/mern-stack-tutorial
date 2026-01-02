const fs=require('fs')
const path=require('path')

registeredHomes=[]
exports.Home=class Home{
     constructor(homeName,pricePerNight,Location,rating,photourl){
         this.homeName=homeName
         this.pricePerNight=pricePerNight
         this.Location=Location
         this.rating=rating
         this.photourl=photourl
     }
 
     save(){

          // saving the data in fake data base
          const filePath=path.join(__dirname,'../','fakeDatabase','homes.json')
          try {
               fs.writeFileSync(filePath,JSON.stringify(this))
               console.log('File written successfully')
               
               
          }catch(error) {
               console.log('Error writing file',error)
          }


     }

     static fetchAll(){
          const filePath=path.join(__dirname,'../','fakeDatabase','homes.json')
          try{
               const fileContent=fs.readFileSync(filePath)
               registeredHomes.push(JSON.parse(fileContent))
               console.log("fc",fileContent)
               return registeredHomes
          }catch (error) {
               console.log('Error reading file',error)
               return []
          }
     }
        
}

