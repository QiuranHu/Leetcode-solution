/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const wordMap = new Set();
    for (let word of wordDict) {
        wordMap.add(word);
    }
    const dp = new Map();
    const dfs = (startIndex) => {
        if (dp.has(startIndex)) {
            return dp.get(startIndex);
        }
        let current = [];
        for (let endIndex = startIndex; endIndex < s.length; endIndex += 1) {
            if (wordMap.has(s.substring(startIndex, endIndex + 1))) {
                if (endIndex === s.length - 1) {
                    current.push([s.substring(startIndex, endIndex + 1)]);
                } else {
                    let candidates = dfs(endIndex + 1);
                    for (candidate of candidates) {
                        current.push([s.substring(startIndex, endIndex + 1), ...candidate]);
                    }
                }
            }
        }
        dp.set(startIndex, current);
        return current;
    }
    dfs(0);
    return dp.get(0).map(words => words.join(' '));
};