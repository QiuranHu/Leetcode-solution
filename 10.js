/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = [];
    for(let i = 0; i <= s.length; i++) {
        dp.push([]);
        for(let j = 0; j <= p.length; j++) {
            dp[i].push(null);
        }
    }
    const helper = (i, j) => {
        let ans;
        if(dp[i][j] !== null) {
            return dp[i][j];
        }
        if(j === p.length) {
            if(i === s.length) {
                ans = true;
            } else {
                ans = false;
            }
        } else {
            // Pattern p has not run out.
            if(i === s.length) {
                // If s has run out, the only possiblity is
                // p is composed of character *.
                if(j + 1 < p.length && p[j + 1] === '*') {
                    ans = helper(i, j + 2);
                } else {
                    ans = false;
                }
            } else {
                if(s[i] === p[j] || p[j] === '.') {
                    if(j + 1 < p.length && p[j + 1] === '*') {
                        ans = helper(i + 1, j) || helper(i, j + 2);
                    } else {
                        ans = helper(i + 1, j + 1);
                    }
                } else {
                    if(j + 1 < p.length && p[j + 1] === '*') {
                        ans = helper(i, j + 2);
                    } else {
                        ans = false;
                    }
                }
            }
        }
        dp[i][j] = ans;
        return ans;
    };
    return helper(0, 0);
};