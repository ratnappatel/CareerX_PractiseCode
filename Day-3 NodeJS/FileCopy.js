//import core module to be used in current program

const fs=require ('fs');
var readFromfile=fs.createReadStream('data.txt');

var writeToFile=fs.createWriteStream('Copy_data.txt');

readFromfile.pipe(writeToFile);
console.log("Data Copied Successfully.");