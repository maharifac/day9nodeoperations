//global variables
// console.log(__filename);//comlete path
// console.log(__dirname); //directory path
// console.log(console);
const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);
console.log(pathObj.name);