/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    /*
    str is the current string.
    num1 is the number of (
    num2 is the number of )
    */
    const result = [];
    const helper = (str, num1, num2) => {
        if(num1 === num2 && num1 === n) {
            result.push(str);
            return;
        }

        if(num1 > num2) {
            if(num1 < n) {
                helper(str + '(', num1 + 1, num2);
            }
            helper(str + ')', num1, num2 + 1);
        }
        else if (num1 === num2) {
            helper(str + '(', num1 + 1, num2);
        }
    };
    helper('', 0, 0);
    return result;
};