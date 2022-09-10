const http=require ('http');
const fs=require ('fs');

http.createServer(function (req,res){
    res.write('response from Node Server');
    // before server stops execution we must perform CLEANUP
    // task[disconnect from DB, delete temp files from memory, 
    //release server connection to API server]
    process.on('exit',code=>{
        setTimeout(()=>{
            console.log('I would be lazy to execute...');
        },0);
    
        console.log('Exited with status code : ',code);
    });
    res.end();
    process.exit();


}).listen(8000);

console.log('Server Started Listening on 8000');