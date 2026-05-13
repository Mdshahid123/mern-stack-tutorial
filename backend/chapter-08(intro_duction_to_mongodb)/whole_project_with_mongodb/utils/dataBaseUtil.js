const mongodb=require("mongodb")
const mongoClient=mongodb.MongoClient
const mongodbUrl="mongodb://skillBridge:skillBridge@ac-242ob8p-shard-00-00.eigwsvm.mongodb.net:27017,ac-242ob8p-shard-00-01.eigwsvm.mongodb.net:27017,ac-242ob8p-shard-00-02.eigwsvm.mongodb.net:27017/?ssl=true&replicaSet=atlas-8bqb0a-shard-0&authSource=admin&appName=skillBridgeCluster"
let _db;
function mongoConnect(callback)
{
    const promise=mongoClient.connect(mongodbUrl)
    promise.then((client)=>{
        callback(null,client)
        _db=client.db("skillBridge")
    }).catch((error)=>{
        callback(error,null)
    })

}

function getDataBase()
{  
  if(!_db)
    throw new Error("mongo not connected")
  return _db
}
module.exports={
  mongoConnect,
  getDataBase
}
