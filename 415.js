/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split('').map((num) => Number(num));
    num2 = num2.split('').map((num) => Number(num));
    let cnt1 = num1.length - 1;
    let cnt2 = num2.length - 1;
    let result = [];
    let carry = 0;
    while(cnt1 >= 0 || cnt2 >= 0) {
        let sum = carry;
        if(cnt1 >= 0) {
            sum += num1[cnt1];
            cnt1 -= 1;
        }
        if(cnt2 >= 0) {
            sum += num2[cnt2];
            cnt2 -= 1;
        }
        result.unshift(sum % 10);
        carry = Math.floor(sum / 10);
    }
    if(carry !== 0) {
        result.unshift(carry);
    }
    return result.join('');
};