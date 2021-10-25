const express= require('express');
const app=express();
// make connection
const dbConnection =require('./connection');
const PORT=process.env.PORT||1337;
app.use(express.json());

//call connection to DB
//dbConnection();
app.post('/user',(req,res)=>
{
 const {firstName,lastName}=req.body;
 console.log(req.body);
 dbConnection(firstName,lastName)
 .then(user=>{
   res.json({
       msg:'success',
       user
   })
 })
});

app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`);
});