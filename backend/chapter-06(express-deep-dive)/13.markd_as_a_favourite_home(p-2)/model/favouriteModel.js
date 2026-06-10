const fs = require("fs");
const path = require("path");


class favouriteModel{

    //constructor function
    constructor(favHome) {
        this.homeId= favHome.homeId; 
    }


    save(callback)
    {
        
        favouriteModel.fetchAll((error,favHomes)=>{
        if(error)
        {
            callback(error,null)
            return
        }
        let allFavHomes
        try {
            allFavHomes=JSON.parse(favHomes)
        
        } catch (error) {
            allFavHomes=[]
        }
            
        //find the duplicate data 
        for(let favHome of allFavHomes)
        {
                if(favHome.homeId===this.homeId)
                {
                    
                callback(null,"Already Exist") 
                return 
                    
                }
        }

        // now that means there is no duplicate data so now  we have to store current data
        let newFavHome={
            homeId:this.homeId
        }
        allFavHomes.push(newFavHome)

            
        const filepath = path.join(__dirname, "../database/favouriteData.json");

        fs.writeFile(filepath, JSON.stringify(allFavHomes,null,2), (error) => {
        if (error) {
            callback(error,null);
            return
        }
        callback(error,"successfully marked");
        });
    }); 
}

    //fetch function
    static fetchAll(callback) {

        const filePath = path.join(__dirname, "../database/favouriteData.json");

        fs.readFile(filePath, "utf-8", (error, data) => {
                 if(error){
                    callback(error,data)
                    return 
                 }

                 callback(error,data)
        })
    }
}
module.exports = favouriteModel;