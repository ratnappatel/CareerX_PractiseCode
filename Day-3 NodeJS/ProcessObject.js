const http=require ('http');

http.createServer(function(req,res){
    console.log('Received a Request..');
res.write("Process ID : "+process.pid);
res.write("<br>Environment : "+process.env[USER]);
res.end();
}).listen(8000);

console.log('Server Started Listening on Port No : 8000');