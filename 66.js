/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // At one at position index.
    function helper(digits, index) {
        if(index === -1) {
            digits.unshift(1);
        }
        if(digits[index] !== 9) {
            digits[index] += 1;
        } else {
            digits[index] = 0;
            helper(digits, index - 1);
        }
    }
    helper(digits, digits.length - 1);
    return digits;
};