//request response handle karto
//core modukle👇
const http = require("http");

http.createServer((req,res)=>{
    res.write("<h1>hello this is a nikhil kamble</h1>");
    res.end();
}).listen(4500);


