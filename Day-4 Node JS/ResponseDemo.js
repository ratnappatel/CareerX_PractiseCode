const http= require ('http');

http.createServer(function(req,res){
    var msg='Welcome ';
    req.on('data', (str)=>{msg=str;});
    console.log(req.url);
    res.statusCode=201;
    res.write('Your Request Processed. ');
    res.write(msg);
   // res.on('data',data=>{msg=msg+data}); // can be /should be handled by ExpressJS Web-framework 
    res.end();
}).listen(8000);

console.log('Server Running on port : 8000');
