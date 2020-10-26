var minCost = function(s, cost) {
    let totalcost=0;
    for(let i=0;i<s.length;i++)
    {
        let sum=cost[i];
        let max=cost[i];
        while(s[i]===s[i+1]&&i<s.length)
        {
            sum+=cost[i+1];
            max=(max>cost[i+1])?max:cost[i+1];
            i++;
        }
        totalcost+=sum-max;
    }
    return totalcost;
};