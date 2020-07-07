/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const corresponding = new Map();
    corresponding.set(')', '(');
    corresponding.set('}', '{');
    corresponding.set(']', '[');
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if(s[i] === ')' || s[i] === '}' || s[i] === ']') {
            const popItem = stack.pop();
            if(popItem !== corresponding.get(s[i])) {
                return false;
            }
        }
    }
    if(stack.length === 0) {
        return true;
    }
    return false;
};