function maxProfit(prices: number[]): number {
  // 203 /212 test cases passed - Time Limit Exceeded
  // let maxProfit = 0
  // let right = prices.length - 1
  // for (let i = 0; i < prices.length; i++) {
  //     for (let j = 0 ; j < right; j++) {
  //         maxProfit = Math.max(prices[right] - prices[j], maxProfit)
  //     }
  //     right--
  // }
  // return maxProfit;
  let l = 0,
    r = 1;
  let maxProfit = 0;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      l = r;
    }
    r++;
  }
  return maxProfit;
}
