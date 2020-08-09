/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // Use two stack. One stack for index, another stack for height.
    // Two stacks will be in sync.
    // When I go to the next bar, check the top of the stack.
    // Top of the stack is the last eligible bar.

    // Use answer to store the temporary maximum value.

    // If the height of the current bar >= the last eligible bar,
    // I don't need to pop the last eligible bar. And I need to add the current
    // bar into stacks.

    // While the height of the current bar < the last eligible bar,
    // I need to pop the last eiligible bar. When I do this, I need to record 
    // the start index of that bar. I need to add the current bar into stack.

    const indexStack = [];
    const heightStack = [];
    let answer = 0; // Area of largest rectangle.

    const popOutOfStacks = (currentIndex) => { // currentIndex is not inclusive.
        const index = indexStack.pop();
        const height = heightStack.pop();
        let temp = height * (currentIndex - index);
        answer = Math.max(answer, temp);
    }
    for (let i = 0; i < heights.length; i++) {
        // i is the current index.
        const height = heights[i];
        if (indexStack.length === 0) {
            indexStack.push(i);
            heightStack.push(height);
        } else {
            let lastIndex = indexStack[indexStack.length - 1];
            let lastHeight = heightStack[indexStack.length - 1];
            if (lastHeight <= height) {
                indexStack.push(i);
                heightStack.push(height);
            } else {
                let index = lastIndex;
                while (lastHeight > height) {
                    index = lastIndex;
                    popOutOfStacks(i);
                    lastIndex = indexStack[indexStack.length - 1];
                    lastHeight = heightStack[indexStack.length - 1];
                }
                indexStack.push(index);
                heightStack.push(height);
            }
        }
    }
    while (indexStack.length !== 0) {
        popOutOfStacks(heights.length);
    }
    return answer;
};