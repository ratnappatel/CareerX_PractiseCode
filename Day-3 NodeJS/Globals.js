var exp= require('express');
var system=require('os');
//console.log("File Name : "+__filename);
//console.log("Dir Location : "+__dirname);

function print()
{
   var start=performance.now();
   console.log("Welcome to Node World..");
   var end=performance.now();
}


console.log(system.hostname());
var x=setTimeout(print, 2500);

clearTimeout(x);