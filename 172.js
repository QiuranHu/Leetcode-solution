/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let numberOfFives = 0;
    while (n !== 0) {
        numberOfFives += Math.trunc(n / 5);
        n = Math.trunc(n / 5);
    }
    return numberOfFives;
};