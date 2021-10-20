const express=require('express');
const app=express();
const PORT=process.env.PORT || 1337;

app.use(express.json());

app.get('/',(req,res)=>{
    const html='<h1> hejsan</h1><p>cool</p>';
    res.send(html);
});

app.get('/exemple',(req,res)=>{
    const attSkicka={
        msg:'okidokey',
        status: 200
    };
    res.json(attSkicka);
});

//paramiters
app.get('/djur/:djur',(req,res)=>{
    const x =`Din favorit djur ar  ${req.params.djur}`;
    res.send(x);
});
//post eendpoint
app.post('/email',(req,res)=>{
    const emailAddress=req.body.email;
    res.status(200).json({
       msg:'email sparad',
       emailAddress
    });
})

app.listen(PORT,()=>{
    console.log('server runnig on port');
});