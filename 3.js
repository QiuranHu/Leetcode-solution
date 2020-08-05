/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    // Idea: double pointers.
    if(s === '') {
        return 0;
    }
    const set = new Set();
    let left = 0;
    let right = 0;
    set.add(s[0]);
    let bestLength = 1;
    let currentLength = 1;
    while(true) {
        if(left === s.length) {
            break;
        }
        while(right + 1 <= s.length - 1 && !set.has(s[right + 1])) {
            set.add(s[right + 1]);
            currentLength += 1;
            right += 1;
            bestLength = Math.max(bestLength, currentLength);
        }

        if(set.has(s[left])) {
            set.delete(s[left]);
        }
        left += 1;
        currentLength -= 1;
    }
    return bestLength;
};