/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // We need to go to (m - 1, n - 1).
    // The initial position is (0, 0).
    const dp = [];
    for(let i = 0; i < m; i++) {
        dp.push([]);
        for(let j = 0; j < n; j++) {
            dp[i].push(-1);
        }
    }
    dp[m - 1][n - 1] = 1;
    function dpHelper(x, y) {
        if(dp[x][y] !== -1) {
            return dp[x][y];
        } else {
            let answer = 0;
            if(x + 1 < m) {
                answer += dpHelper(x + 1, y);
            } 
            if(y + 1 < n) {
                answer += dpHelper(x, y + 1);
            }
            dp[x][y] = answer;
            return answer;
        }
    }
    return dpHelper(0, 0);
};