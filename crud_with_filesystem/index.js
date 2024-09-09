const fs= require('fs');
const path = require('path');
const dirpath=path.join(__dirname,'crud');

const filepath=`${dirpath}/apple.txt`
// fs.writeFileSync(filepath,'this is simpeltext file')


//read file
// fs.readFile(filepath,'utf-8',(err ,item)=>{
//     console.log(item);
    
// })

//update
// fs.appendFile(filepath,'and file name is apple .txt',(err)=>{
//     if(!err) console.log('file is updated');
    
// })

//rename

// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//         if(!err) console.log('file is updated');

// })

//delete

fs.unlinkSync(`${dirpath}/fruit.txt`);

//q what is buffeer-> temprory memory location
