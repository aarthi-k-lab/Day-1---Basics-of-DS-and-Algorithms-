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
    let str=userInput[0].split("");
    for(let index=0;index<str.length;index=index+2)
    {
        let temp=str[index];
        str[index]=str[index+1];
        str[index+1]=temp;
    }
    console.log(str.join(""));
});