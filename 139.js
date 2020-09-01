/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dict = new Set();
    for (let word of wordDict) {
        dict.add(word);
    }
    const dp = new Map();
    const dfs = (startIndex) => {
        if (dp.has(startIndex)) {
            return dp.get(startIndex);
        }
        if (startIndex === s.length) {
            return true;
        }
        let answer = false;
        for (let i = startIndex; i < s.length; i++) {
            // i is inclusive
            if (dict.has(s.substring(startIndex, i + 1))) {
                let result = dfs(i + 1);
                if (result === true) {
                    answer = true;
                    break;
                }
            }
        }
        dp.set(startIndex, answer);
        return answer;
    };
    return dfs(0);
};