/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const comparePrefix = (str1, str2) => {
        const prefixArray = [];
        for(let i = 0; i < str1.length; i++){
            if(str1[i] !== str2[i]) {
                break;
            } else {
                prefixArray.push(str1[i]);
            }
        }
        return prefixArray.join("");
    };
    if(strs.length === 0) {
        return "";
    }
    let result = strs[0];
    for(let i = 1; i < strs.length; i++){
        result = comparePrefix(result, strs[i]);
    }
    return result;
};

