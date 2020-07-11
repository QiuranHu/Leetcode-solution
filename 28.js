/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === '') {
        return 0;
    }
    // haystack.length - 1 - i + 1 >= needle.length
    for(let i = 0; i < haystack.length && i <= haystack.length - needle.length; i++) {
        let j = 0;
        let cur = i;
        while(cur < haystack.length && j < needle.length && haystack[cur] === needle[j]) {
            cur ++;
            j ++;
        }
        if(j === needle.length) {
            return i;
        }
    }
    return -1;
};