 const express=require('express');
 const app=express();


 app.get('',(req,res)=>{
    res.send('Welcome , this is home page');
 });

 app.get('/about',(req,res)=>{
    res.send('hello THis is About page');
 });

 app.get('/help',(req,res)=>{
    res.send('hello THis is help page page');
 });

 app.listen(5000);
