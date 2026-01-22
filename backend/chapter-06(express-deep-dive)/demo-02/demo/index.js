const registeredHome=[]
const path=require("path")
const fs=require("fs")
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
        const filePath=path.join(__dirname,'./','fakeDatabase','fakedatabase.json')
          fs.readFile(filePath,(error,data)=>{
                 
          console.log("file read:",error,JSON.parse(data))
            //      if(error)
            //      {
            //         callback([])
            //      }
            //      else{

            //           callback(JSON.parse(data))
            //      }
            //  })
  })
}

}

Home.fetchdataBase()
