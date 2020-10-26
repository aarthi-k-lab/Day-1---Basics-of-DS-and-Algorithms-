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
   let arr=userInput[0].split(" ").map(Number);
   let obj={};
   for(let i=0;i<arr.length;i++)
   {
       if(obj[arr[i]]===undefined)
       {
           obj[arr[i]]=1;
       }
       else
       {
          obj[arr[i]]=obj[arr[i]]+1; 
       }
   }
   let pair=0;
   let val=Object.values(obj);
   for(let n of val)
   {
     let sum=Math.round((n*(n-1))/2);
     pair+=sum;
   }
   console.log(pair);
});