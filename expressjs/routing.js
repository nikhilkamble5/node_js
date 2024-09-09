const express=require('express');
const app=express();


app.get('',(req,res)=>{
    console.log('data send by  browser ==>>',req.query.name);
    
   res.send('Welcome '+req.query.name);
});

app.get('/about',(req,res)=>{
   res.send('hello THis is About page');
});

app.get('/help',(req,res)=>{
   res.send('hello THis is help page page');
});

app.listen(5000);
