const {MongoClient} = require('mongodb');
const url = "mongodb://0.0.0.0:27017/";
const dbname = 'TestDB';
const client = new MongoClient(url);
async function dbConn(){
    let result = await client.connect();
    db = result.db(dbname);
    return  collection = db.collection('User');
   
}
module.exports= dbConn;