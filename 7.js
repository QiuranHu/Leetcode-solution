/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === -2147483648) {
        return 0;
    }
    let sign = 1;
    if(x < 0) {
        sign = -1;
    }
    // Set x to be the absolute value of x.
    x = Math.abs(x);
    const digits = [];
    while(x > 0) {
        digits.push(x % 10);
        x = Math.floor(x / 10);
    }
    // Check if the number overflows.
    // - 2 ** 31 =  - 2147483648
    // 2 ** 31 - 1 = 2147483647
    let overflow = false;
    const biggestPositve = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];
    const smallestNegetive = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8]
    if(digits.length === 10) {
        let compare = biggestPositve;
        if(sign === -1) {
            compare = smallestNegetive;
        }
        for(let i = 0; i < compare.length; i++) {
            if(digits[i] < compare[i]) {
                break;
            } else if(digits[i] > compare[i]) {
                overflow = true;
                break;
            }
        }
    }
    if(overflow) {
        return 0;
    }
    let result = 0;
    for(let i = 0; i < digits.length; i++){
        result *= 10;
        result += digits[i];
    }
    return sign * result;
};