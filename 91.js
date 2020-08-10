/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = [];
    for(let i = 0; i < s.length; i++) {
        dp.push(-1);
    }
    dp.push(1);
    // dp[i] means the number of ways to decode the string starting  
    // at position i (inclusive).
    const helper = (index) => {
        if(index > s.length) {
            return 0;
        }
        if(dp[index] !== -1) {
            return dp[index];
        }
        let answer = 0;
        if(s[index] !== '0') {
            answer += helper(index + 1);
            if(Number(s.substr(index, 2)) > 0 && Number(s.substr(index, 2)) <= 26) {
                answer += helper(index + 2);
            }
        }
        
        dp[index] = answer;
        return answer;
    };
    return helper(0);
};