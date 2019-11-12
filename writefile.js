//file write async

var fs = require('fs');
fs.writeFile('test.txt','helloworld!',function(err){
    if(err)
console.log(err);

else

console.log('write operation completed');
});