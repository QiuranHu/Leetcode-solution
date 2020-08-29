/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set();
    for (let num of nums) {
        set.add(num);
    }
    let answer = -1 * Number.MAX_VALUE;
    for (let num of set) {
        // If num is not the first number, 
        // don't do calculation on num.
        if (set.has(num - 1)) {
            continue;
        }
        let length = 1;
        let current = num;
        while (set.has(current + 1)) {
            current += 1;
            length += 1;
        }
        answer = Math.max(answer, length);
    }
    return answer === -1 * Number.MAX_VALUE ? 0 : answer;
};