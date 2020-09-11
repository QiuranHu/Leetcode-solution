/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (tokens.length === 0) {
        return 0;
    }
    const stack = [];
    for (let token of tokens) {
        if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
            stack.push(token);
        } else {
            const operation = token;
            const operand2 = Number(stack.pop());
            const operand1 = Number(stack.pop());
            let answer;
            if (operation === '+') {
                answer = operand1 + operand2;
            } else if (operation === '-') {
                answer = operand1 - operand2;
            } else if (operation === '*') {
                answer = operand1 * operand2;
            } else if (operation === '/') {
                answer = Math.trunc(operand1 / operand2);
            }
            stack.push(answer);
        }
    }
    return stack.pop();
};