/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// In this problem string is only composed of 26 characters.
var groupAnagrams = function(strs) {
    function generateCount(str) {
        const count = [];
        for(let i = 0; i < 26; i++) {
            count.push(0);
        }
        for(let i = 0; i < str.length; i++) {
            const index = str.charCodeAt(i) - 'a'.charCodeAt(0);
            count[index] += 1;
        }
        return count.join('-');
    }
    const map = new Map();
    for(let str of strs) {
        const count = generateCount(str);
        if(map.get(count)) {
            map.get(count).push(str);
            map.set(count, map.get(count));
        } else {
            map.set(count, [str]);
        }
    }
    const answer = [];
    for(let array of map.values()) {
        answer.push(array);
    }
    return answer;
};