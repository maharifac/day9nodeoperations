//for reading directory,files

// const fs = require('fs');
// const files = fs.readdirSync('./');//synchronous
// console.log(files); 

const fs = require('fs');
fs.readdir('./',function(err,files)    //asynchronous
{
    if(err) console.log('error',err);
    else console.log('result',files);

});