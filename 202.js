/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let current = n;
    let set = new Set();
    while (current !== 1) {
        if (set.has(current)) {
            return false;
        }
        set.add(current);
        let newNumber = 0;
        while (current !== 0) {
            const digit = current % 10;
            newNumber += digit * digit;
            current = Math.trunc(current / 10);
        }
        current = newNumber;
    }
    return true;
};