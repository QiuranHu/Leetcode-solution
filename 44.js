/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */


var isMatch = function(s, p) {
    // dp[x][y] = true means s[0,x) and p[0,y) match.
    // x can be between 0 and s.length.
    // y can be between 0 and y.length.
    const dp = [];
    for(let i = 0; i < s.length + 1; i++) {
        dp.push([]);
        for(let j = 0; j < p.length + 1; j++){
            dp[i].push(-1);
        }
    }
    dp[0][0] = 1;
    let isAllStars = true;
    // Handle first row.
    for(let j = 0; j < p.length; j++){
        if(p[j] !== '*'){
            isAllStars = false;
        }
        if(isAllStars) {
            dp[0][j + 1] = 1;
        } else {
            dp[0][j + 1] = 0;
        }
    }
    // Handle first column.
    for(let i = 1; i < s.length + 1; i++){
        dp[i][0] = 0;
    }
    function isMatchHelper(x, y) {
        if(dp[x][y] !== -1) {
            return dp[x][y];
        }
        // We can be sure that x >= 1 and y >= 1.
        if(s[x - 1] === p[y - 1] || p[y - 1] === '?') {
            const answer = isMatchHelper(x - 1, y - 1);
            dp[x][y] = answer;
            return answer;
        } else if(p[y - 1] === '*') {
            const answer1 = isMatchHelper(x, y - 1);
            const answer2 = isMatchHelper(x - 1, y);
            let answer = 0;
            if(answer1 === 1 || answer2 === 1) {
                answer = 1;
            }
            dp[x][y] = answer;
            return answer;
        } else {
            dp[x][y] = 0;
            return 0;
        }
    }
    if(isMatchHelper(s.length, p.length) === 1){
        return true;
    } else {
        return false;
    }
};