/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    // Use dp to test if part of the string is palindrome.
    // Use dfs to generate the answer;
    const dp = []; // dp[i][j] = true if s.substring(i, j + 1).
    // j is inclusive.
    for (let i = 0; i < s.length; i++) {
        dp.push([]);
        for (let j = 0; j < s.length; j++) {
            dp[i].push(null);
        }
    }
    const isPalindrome = (x, y) => {
        if (dp[x][y] !== null) {
            return dp[x][y];
        }
        let answer;
        if (x === y) {
            answer = true;
        } else if (x === y - 1) {
            answer = (s[x] === s[y]);
        } else {
            answer = (s[x] === s[y] && isPalindrome(x + 1, y - 1));
        }
        dp[x][y] = answer;
        return answer;
    };
    const answer = [];
    const dfs = (startIndex, current) => {
        if (startIndex === s.length) {
            answer.push(current);
            return;
        }
        for (let endIndex = startIndex;
            endIndex < s.length;
            endIndex += 1) {
            if (!isPalindrome(startIndex, endIndex)) {
                continue;
            }
            const newCurrent = current.slice(0);
            newCurrent.push(s.substring(startIndex, endIndex + 1));
            dfs(endIndex + 1, newCurrent);
        }
    }
    dfs(0, []);
    return answer;
};