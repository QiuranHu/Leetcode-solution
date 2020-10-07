/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let num = "";
  const signs = ["+", "-", "*", "/"];
  let sign = "+";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
    } else if (signs.some((sign) => sign === s[i])) {
      if (sign === "+") {
        stack.push(Number(num));
      } else if (sign === "-") {
        stack.push(-Number(num));
      } else if (sign === "*") {
        stack.push(stack.pop() * Number(num));
      } else if (sign === "/") {
        stack.push(Math.trunc(stack.pop() / Number(num)));
      }
      num = "";
      sign = s[i];
    } else {
      num += s[i];
    }
  }
  if (num !== "") {
    if (sign === "+") {
      stack.push(Number(num));
    } else if (sign === "-") {
      stack.push(-Number(num));
    } else if (sign === "*") {
      stack.push(stack.pop() * Number(num));
    } else if (sign === "/") {
      stack.push(Math.trunc(stack.pop() / Number(num)));
    }
  }
  let answer = 0;
  for (let number of stack) {
    answer += number;
  }
  return answer;
};
