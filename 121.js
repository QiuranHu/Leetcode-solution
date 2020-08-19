/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 0) {
        return 0;
    }
    let currentMin = prices[0];
    let answer = 0;
    for(let i = 1; i < prices.length; i ++) {
        if(prices[i] < currentMin) {
            currentMin = prices[i];
        } else {
            answer = Math.max(answer, prices[i] - currentMin);
        }
    }
    return answer;
};