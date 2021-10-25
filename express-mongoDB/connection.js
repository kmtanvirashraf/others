const {MongoClient}=require('mongodb');

// connection URL
const url ='mongodb://localhost:27017';
// include url
const client= new MongoClient(url);
//Database name
const dbName='max-lexicon';
// create function 
async function main(firstName,lastName){

    //use connect method to connect to server
    await client.connect();
    console.log('Connected to server');
    const db=client.db(dbName);

    const userCollection=db.collection('users');
    const addUser=await userCollection.insertOne({
        firstName,
        lastName
     } );
     return addUser;
}

module.exports=main;