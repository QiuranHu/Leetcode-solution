/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addDigit(array, digit, index) {
    array[index] += digit;
    let currentIndex = index;
    while(array[currentIndex] >= 10) {
        const carry = Math.floor(array[currentIndex] / 10);
        array[currentIndex] %= 10;
        currentIndex += 1;
        array[currentIndex] += carry;
    }
}
var multiply = function(num1, num2) {
    num1 = num1.split('').map(digit => Number(digit));
    num2 = num2.split('').map(digit => Number(digit));
    num1.reverse();
    num2.reverse();
    const answer = [];
    // For example, if num1 = 99, num2 = 99, num1 * num2 < 100 * 100 = 10000.
    const maxLength = num1.length + num2.length;
    for(let i = 0; i < maxLength; i++) {
        answer.push(0);
    }
    for(let cnt1 = 0; cnt1 < num1.length; cnt1++) {
        for(let cnt2 = 0; cnt2 < num2.length; cnt2++) {
            const digit1 = num1[cnt1];
            const digit2 = num2[cnt2];
            const result = digit1 * digit2;
            const index = cnt1 + cnt2;
            if(result < 10) {
                addDigit(answer, result, index);
            } else {
                addDigit(answer, result % 10, index);
                addDigit(answer, Math.floor(result / 10), index + 1);
            }
        }
    }
    
    answer.reverse();
    // Remember to delete the leading 0s.
    while(answer[0] === 0) {
        answer.shift();
    }
    if(answer.length === 0) {
        return '0';
    }
    return answer.join('');
};