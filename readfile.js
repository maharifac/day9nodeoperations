// for reading files

// var fs = require('fs');
// var data = fs.readFileSync('dummyfile.txt','utf8');//synchronous
// console.log(data); 

var fs = require('fs');
fs.readFile('dummyfile.txt','utf8',function(err,data)    //asynchronous
{
    if(err) throw err;
    console.log(data);
});