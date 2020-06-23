/**
 * @param {string} str
 * @return {number}
 */

// Judge if a number overflow.
// 2 ** 31 = 2147483648
// 2 ** 31 - 1 = 2147483647
// - 2 ** 31 = - 2147483648
const isOverflow = function(digits, sign) {
    if(digits.length > 10) {
        return true;
    } else if(digits.length < 10) {
        return false;
    }
    // digits = 10
    const max = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];
    const min = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
    let compare = max;
    if(sign === -1) {
        compare = min;
    }

    for(let i = 0; i < 10; i++){
        if(digits[i] < compare[i]) {
            return false;
        } else if(digits[i] > compare[i]) {
            return true;
        } 
    }
    return false;
}

var myAtoi = function(str) {
    let sign = 1;
    const digits = [];
    let i = 0;
    // Pass all white space
    for(; i < str.length; i++) {
        if(str[i] === ' ') {
            continue;
        } else {
            break;
        }
    }
    // From str[i], there is no white space.
    // Handle minus sign
    if(str[i] === '-') {
        sign = -1;
        i++;
    } else if(str[i] === '+'){
        i ++;
    }
    // Delete 0s
    for(; i < str.length; i++) {
        if(str[i] === '0'){
        } else {
            break;
        }
    }
    
    const digitMap = new Map();
    const digitStringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(let index = 0; index < 10; index++){
        digitMap.set(digitStringArray[index], index);
    }
    
    for(; i < str.length; i++){
        if(digitMap.has(str[i])){
            digits.push(digitMap.get(str[i]));
        } else {
            break;
        }
    }
    
    // Get the result
    if(isOverflow(digits)) {
        if(sign === 1) {
            return 2147483647;
        } else {
            return -2147483648;
        }
    }
    let result = 0;
    for(let index = 0; index < digits.length; index++){
        result *= 10;
        result += digits[index];
    }
    return sign * result;
    
};