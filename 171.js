/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    // The last digit: A -> 1
    //                 Z -> 26
    // The second last digit: A -> 26
    //                        B -> 26 + 26
    //                        Z -> 26 ^ 2
    const getNumber = (char) => {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    };
    let result = 0;
    const digits = s.split('');
    let count = 0;
    while (digits.length !== 0) {
        let current = 0;
        current = getNumber(digits.pop());
        current *= Math.pow(26, count);
        result += current;
        count += 1;
    }
    return result;
};