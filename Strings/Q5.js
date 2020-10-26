// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var a=userInput[0];
    var n=a.length;
    var charcode=0;
    for(var i=0;i<n;i++)
    {
       charcode+=a.charCodeAt(i); 
    }
    console.log(charcode);
});