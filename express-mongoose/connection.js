const mongoose=require('mongoose');
const url='mongodb+srv://Tanvir:Woodcouch27!@firstcluster.6lnaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
async function dbConnect(){
 console.log('Connected to database');
 mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
 const mgDB=mongoose.connection;
 mgDB.on('connected',console.log.bind(console,'connected to server'));
 
};
module.exports=dbConnect;