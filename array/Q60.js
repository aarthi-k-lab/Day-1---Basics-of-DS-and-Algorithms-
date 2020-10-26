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
    let size=+userInput[0].split(" ")[0];
    let num=+userInput[0].split(" ")[1];
    let arr=userInput[1].trim().split(" ").map(Number);
    let result=[];
    let pointer=-1;
    for(let i=0;i<size;i++)
    {
        if(arr[i]<num)
        {
            for(var j=pointer;j>=0&&arr[i]<result[j];j--)
            {
              result[j+1]=result[j];  
            }
            result[j+1]=arr[i];
            pointer++;
        }
    }
    if(result.length!==0)
    console.log(result.join(" "));
    else
    console.log("-1");
});