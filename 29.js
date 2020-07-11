/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 2 ^ 31 = 2147483648
    if(dividend === -2147483648 && divisor === -1 ) {
        return 2147483647; 
    }
    let sign = 1;
    if(!((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0))){
        sign = -1;
    } 
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let result = 0;
    
    while(dividend >= divisor) {
        let newDivisor = divisor;
        let numberToAdd = 1;
        while(dividend >= newDivisor + newDivisor) {
            newDivisor += newDivisor;
            numberToAdd += numberToAdd;
        }
        dividend -= newDivisor;
        result += numberToAdd;
    }
    return result * sign;
};