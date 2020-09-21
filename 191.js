/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let answer = 0;
    while (n !== 0) {
        if (n % 2 === 1) {
            answer += 1;
        }
        n = Math.trunc(n / 2);
    }
    return answer;
};