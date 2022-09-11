const http = require ('http');

mymethod=function(res){

    var data='Your OTP for this transaction is : ';
    var rno=Math.random()*10000;
    data=data+rno;
    console.log(data);
    res.on('end',function(){
        this.callback;
    });
};

http.createServer(function(req,res){
   mymethod(res);
   res.end();
}).listen(8000);

