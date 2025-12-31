//fake data base 

const registeredHomes=[]

exports.Home=class Home{
     constructor(homeName,pricePerNight,Location,rating,photourl){
         this.homeName=homeName
         this.pricePerNight=pricePerNight
         this.Location=Location
         this.rating=rating
         this.photourl=photourl
     }
     save(){
          registeredHomes.push(this)
     }

     static fetchAll(){
          return registeredHomes
     }
        
}

