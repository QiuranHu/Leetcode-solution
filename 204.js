/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const isPrimary = [];
    for (let i = 0; i < n; i++) {
        isPrimary.push(true);
    }
    for (let i = 2; i * i < n; i++) {
        if (isPrimary[i] === false) {
            continue;
        }
        for (let j = i * i; j < n; j += i) {
            isPrimary[j] = false;
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrimary[i]) {
            count += 1;
        }
    }
    return count;
};