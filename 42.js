/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    // Two pointer approach.
    let answer = 0;
    
    let left = 0;
    let right = height.length - 1;
    let leftHeight = 0;
    let rightHeight = 0;

    while(left <= right) {
        let h = Math.min(leftHeight, rightHeight);
        if(leftHeight <= rightHeight){
            // In this case, move left pointer.
            if(h > height[left]) {
                answer += h - height[left];
            }
            leftHeight = Math.max(leftHeight, height[left]);
            left += 1;
        } else {
            // In this case, move right pointer.
            if(h > height[right]) {
                answer += h - height[right];
            }
            rightHeight = Math.max(rightHeight, height[right]);
            right -= 1;
        }
    }
    return answer;
};