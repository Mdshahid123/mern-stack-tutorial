const registeredHome=[]

class Home
{
  // constructor fucntion intialze object
  constructor(homeName,pricePerNight,Location,rating,photourl)
  {
        this.homeName=homeName
        this.pricePerNight=pricePerNight
        this.Location=Location
        this.rating=rating
        this.photourl=photourl 
  }
// save function
  save(){
        registeredHome.push(this)  

  }

  static fetchdataBase(){
     return registeredHome
  }

}

module.exports=Home