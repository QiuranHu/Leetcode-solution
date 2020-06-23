/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    const digits = [];
    let copy = x;
    // If x = 100, digits=[0, 0, 1];
    while(copy > 0) {
        digits.push(copy % 10);
        copy = Math.floor(copy / 10);
    }
    let result = 0;
    for(let i = 0; i < digits.length; i++) {
        result *= 10;
        result += digits[i];
    }
    return x === result;
};