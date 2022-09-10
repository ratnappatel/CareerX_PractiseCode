const http=require('http');

http.createServer(function(req,res){ //callback function
    console.log("Received Request ... ");
    res.write("<h1>Hello From Node Server.....</h1>");
    res.end();
    process.exit(); // killing the event-loop of node server 
  
}).listen(8000);

console.log('Server Listens on Port : 8000');

//server need to have unique URL over an internet
//function addtocart(){}
// <input type=button onclick=addtocart()>Submit
// need to be published [registering a domain space for our application]