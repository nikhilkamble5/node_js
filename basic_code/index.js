
const { log } = require('console');
const app=require('./app')
//------------------------------------------
// var a=20;
// var b=20;
// var c=30;
// console.log(a+b+c);

//------------------------------------------

// console.log(app.z());

//------------------------------------------
    //filter array
// const arr= [2,4,3,1,7,1,3,8,];

// let result=arr.filter((item)=>{
//     // console.log(item);
//     // return item===3;
    
//     return item=>4;

// })

// console.warn(result);

//------------------------------------------

//👇🔥 Non global module ;> je import module karaawe lagtat 
// const fs= require('fs');

// console.log("code step by step");
// fs.writeFileSync("hello.txt","cena cen cena");

//------------------------------------------

    //🔥file name directory nae chek karne

    // const fs= require('fs');
    // console.log("->>",__filename);
    // console.log("->>",__dirname);
 
 //------------------------------------------
   
    const fs= require('fs').writeFileSync;
    fs("abc.txt","abc")
    
    
