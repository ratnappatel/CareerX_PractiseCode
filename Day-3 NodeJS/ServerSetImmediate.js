const http=require('http');

http.createServer(function(req,res){ //callback function executed when server receives any request
    console.log("Received Request ... ");
    res.write("<h1>Hello From Node Server.....</h1>");
    res.end();
    process.exit(); // killing the event-loop of node server 
  
}).listen(8000);

console.log('Server Started Listening at 8000');
console.log('From setImmediate');