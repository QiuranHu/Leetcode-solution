/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const m = new Map();
    for(let i = 0; i < numRows; i++){
        m.set(i, []);
    }
    let current = 0;
    let down = true;
    for(let i = 0; i < s.length; i++){
        m.get(current).push(s[i]);
        if(down) {
            if(current + 1 < numRows) {
                current = current + 1;
            } else if(current - 1 >= 0) {
                current = current - 1;
                down = false;
            }
        } else {
            if(current - 1 >= 0) {
                current = current - 1;
            } else if(current + 1 < numRows) {
                current = current + 1;
                down = true;
            }
        }
    }
    let resultArray = [];
    for(let i = 0; i < numRows; i++){
        resultArray = resultArray.concat(m.get(i));
    }
    return resultArray.join('');
};