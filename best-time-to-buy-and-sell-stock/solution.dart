class Solution {
  int maxProfit(List<int> prices) {
    int left = 0;
    int right = 0;
    int maxProfit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        int profit = prices[right] - prices[left];
        maxProfit = max(profit, maxProfit);
      } else {
        left = right;
      }
      right++;
    }
    return maxProfit;
  }
}
