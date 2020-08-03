/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [];
    for(let i = 0; i < n + 1; i += 1) {
        dp.push(-1);
    }
    dp[0] = 1;
    function helper(index) {
        if(dp[index] >= 0) {
            return dp[index];
        }
        let answer = 0;
        if(index - 1 >= 0) {
            answer += helper(index - 1);
        }
        if(index - 2 >= 0) {
            answer += helper(index - 2);
        }
        dp[index] = answer;
        return answer;
    } 
    return helper(n);
};