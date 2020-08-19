/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // arr[x][y] === true means the substring starting at index x 
    // and ends at index y (inclusive) is palindromic.
    arr = [];
    let maxLength = 0;
    let start = -1;
    let end = -1;
    for(let i = 0; i < s.length; i ++) {
        arr.push([]);
        for(let j = 0; j < s.length; j++) {
            arr[i].push(null);
        }
    }
    
    // Go up.
    for(let j = 0; j < s.length; j++) {
        for(let i = 0; i < s.length; i++) {
            if(i + j >= s.length) {
                continue;
            }
            if(j === 0) {// First compute the diagonal, the go up.
                arr[i][i] = true;
            } else if(j === 1) {// Go up one level;
                arr[i][i + 1] = s[i] === s[i + 1] ? true : false; 
            } else if(s[i] === s[i + j] && arr[i + 1][i + j - 1] === true) {
                arr[i][i + j] = true;
            } else {
                arr[i][i + j] = false;
            }
            if(arr[i][i + j] === true && j + 1 > maxLength) {
                maxLength = j + 1;
                start = i;
                end = i + j;
            }
        }
    }
    return s.substr(start, end - start + 1);
    
};