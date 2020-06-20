/**
 * Time complexity: n ^ 2
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // arr[x][y] === true means the substring starting at index x 
    // and ends at index y (inclusive) is palindromic.
    arr = [];
    for(let i = 0; i < s.length; i ++) {
        arr.push([]);
        for(let j = 0; j < s.length; j++) {
            arr[i].push(false);
        }
    }
    let length = 0;
    let longest = '';
    for(let i = 0; i < s.length; i++) {
        if(length === 0) {
            longest = s.substr(0, 1);
            length = longest.length;
        }
        arr[i][i] = true;
        if(i + 1 < s.length) {
            if(s[i] === s[i + 1]) {
                const j = i + 1;
                arr[i][j] = true;
                if(j - i + 1 > length) {
                    length = j - i + 1;
                    longest = s.substr(i, length);
                }
            }
        }
    }
    
    for(let j = 2; j < s.length; j ++) {
        for(let i = 0; i < s.length; i++) {
            // calculate arr[i][j]
            if(i + j < s.length) {
                if(s[i] === s[i + j]) {
                    if(arr[i + 1][i + j - 1]) {
                        arr[i][i + j] = true;
                        if(j + 1 > length) {
                            length = j + 1;
                            longest = s.substr(i, length);
                        }
                    }
                }
            }
        }
    }
    return longest;
    
};