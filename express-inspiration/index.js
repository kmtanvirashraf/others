const express=require('express');
const app=express();
const PORT= process.env.PORT|| 3000;
const quotes=require('inspirational-quotes');
const morgan=require('morgan');

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('<h1> Quotes API</h1>');
});
app.get('/quote',(req,res)=>
{
    const quote=quotes.getRandomQuote();
    res.send(quote);
})
app.listen(PORT,()=>{
    console.log(`Lets ger quotes in server on ${PORT}`);
});