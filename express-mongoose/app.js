const express=require('express');
const app=express();
// todo: koppla Schema
const User=require('./User');
const connection=require('./connection');
//connect to database
connection();
const PORT=process.env.PORT||1337;
app.use(express.json());

app.post('/user',(req,res)=>
{
   const data=new User(req.body);
   data.save((err,user)=>{
       if(err){
           return res.json(err);
       }
       res.json({success:true,user});
   });
   
});

app.listen(PORT,()=>{
    console.log(`Working on port`+ PORT);
})