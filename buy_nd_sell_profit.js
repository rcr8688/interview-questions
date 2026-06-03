let costs = [7, 1, 5, 3, 6, 4, 10];

function buyndSell(costs = []) {
  let min = costs[0];
  let maxProfit = 0;
  for (let i = 1; i < costs.length; i++) {
    if (costs[i] - min > maxProfit) {
      maxProfit = costs[i] - min;
    }
    if (costs[i] < min) {
      min = costs[i];
    }
  }
  return maxProfit;
}

console.log(buyndSell(costs));
