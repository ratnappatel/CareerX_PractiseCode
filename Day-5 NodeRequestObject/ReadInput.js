const http= require ('http');
const fs= require('fs');

http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody);
          const message = parsedBody.split('=')[1];
          fs.writeFileSync('message.txt', message);
          message = parsedBody.split('=')[0];
          fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      }
}).listen(8000);
console.log('Server Listening at 8000 port');