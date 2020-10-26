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
    var a=userInput[0].split("");
    var n=a.length;
    var obj={}
    var count=0;
    for(var i=0;i<n;i++)
    {
        if(obj[a[i]]===undefined)
        {
            obj[a[i]]=1;
            count++;
           
        }
    }
    if(count===3)
    {
        console.log("Wonder");
    }
    else
    {
       console.log("-1");  
    }
});