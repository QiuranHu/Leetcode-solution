/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let result = "";
    for(let index = 0; index < s.length; index ++) {
        let temp = "";
        let cur = index;
        while(cur < s.length && !temp.includes(s[cur])) {
            temp += s[cur];
            cur += 1;
        }
        if(temp.length > result.length) {
            result = temp;
        }
    }
    return result.length;
};