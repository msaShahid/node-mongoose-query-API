const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'blog';
const client = new MongoClient(url);

async function getData(){

    // Use connect method to connect to the server
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('posts');
   /* let collection = db.collection('posts');
     let response = await collection.find({}).toArray();
    console.log(response); */

}
//getData();

module.exports = getData;
