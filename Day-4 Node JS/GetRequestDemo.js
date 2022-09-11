const http= require ('http');

var options = {
   host: 'http://localhost:8000' //'icici/ccverify'
   //path: '/getOTP' // 4135635454747
};

// when this request url executed what a server should return 

mymethod=function(res){

    var data='Your OTP for this transaction is : ';
    var rno=Math.random()*10000;
    data=data+rno;
    console.log(data);
    res.on('end',function(){
        this.callback;
    });
};

http.request(options).end();