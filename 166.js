/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    let result = [];
    if (numerator === 0) {
        return '0';
    }
    if (!(numerator < 0 && denominator < 0) && (numerator < 0 | denominator < 0)) {
        result.push('-');
        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);
    }
    // Integer part.
    result.push(String(Math.trunc(numerator / denominator)));
    // Decimal part.
    numerator = numerator % denominator;
    if (numerator !== 0) {
        result.push('.');
    }
    let isRepeated = false;
    let repeatDigit;
    const digitMap = new Map();
    while (numerator !== 0) {
        if (digitMap.has(numerator)) {
            isRepeated = true;
            repeatDigit = digitMap.get(numerator);
            break;
        }
        const digit = Math.trunc((numerator * 10) / denominator);
        digitMap.set(numerator, result.length);
        numerator = (numerator * 10) % denominator;
        result.push(digit);
    }
    if (isRepeated) {
        result.splice(repeatDigit, 0, '(');
        result.push(')');
    }
    return result.join('');
};