const http = require ('http');

http.createServer(function(req,res){
    console.log("Http Request Method : "+req.method);
    console.log("Headers "+req.headers);
    console.log("Request Host "+req.headers.host);
    console.log("Body "+req.headers['content-type']);
}).listen(8000);

