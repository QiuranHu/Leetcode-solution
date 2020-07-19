/**
 * @param {string} s
 * @return {number}
 */
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};
class Stack {
    constructor() {
        this.sentinal = new Node(null, null);
    }
    add(value) {
        const nodeToAdd = new Node(value, this.sentinal.next);
        this.sentinal.next = nodeToAdd;
    }
    delete() {
        if(this.sentinal.next === null) {
            return null;
        } else {
            const valueToReturn = this.sentinal.next.value;
            this.sentinal.next = this.sentinal.next.next;
            return valueToReturn;
        }
    }
};
var longestValidParentheses = function(s) {
    let answer = 0;
    const stack = new Stack();
    // Record the position of last valid left parenthesis.
    let lastValidLeftParenthesis = -1;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            if(lastValidLeftParenthesis !== -1) {
                // Replace the current index with the position of last 
                // valid left parenthesis.
                // We can image that the current ( is inserted at that position.
                stack.add(lastValidLeftParenthesis);
                lastValidLeftParenthesis = -1;
                // After that, set lastValidLeftParenthesis to -1 again.
            } else {
                stack.add(i);
            }
        } else if(s[i] === ')') {
            const indexOfLeftParenthesis = stack.delete();
            if(indexOfLeftParenthesis !== null) {
                answer = Math.max(answer, i - indexOfLeftParenthesis + 1);
                lastValidLeftParenthesis = indexOfLeftParenthesis;
            } else {
                lastValidLeftParenthesis = -1;
            }
        }
    }
    return answer;
};
