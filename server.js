var http = require('http');
var server= http.createServer(function(request,res){
    res.write('<h1> hello world</h1>');
    res.end('how are you babes');
});
server.listen();
console.log(server.address());
console.log(server);


//direct call back
const EventEmitter = require('events');
var emitter = new EventEmitter();
emitter.on("myevent",(arg1,arg2)=>{
    console.log("id is arg1"+arg1+"and name is" +arg2);

});
EventEmitter.emit('myevent',1,'rahul');
