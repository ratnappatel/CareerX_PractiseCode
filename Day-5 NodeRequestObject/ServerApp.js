const http=require ('http');
const fs= require ('fs');

http.createServer(function(req,res){
    var _url=req.url;
    console.log(_url);
    if(_url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Your Name</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(_url === '/message')
    {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

}).listen(8000);

console.log('Server Started Listening on Port No 8000');