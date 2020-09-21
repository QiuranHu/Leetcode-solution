/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0;
    let power = 31;
    while (n !== 0) {
        if (n % 2 !== 0) {
            result += Math.pow(2, power);
        }
        n = Math.trunc(n / 2);
        power -= 1;
    }
    return result;
};
