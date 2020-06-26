/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if(height[left] < height[right]) {
            left += 1;
        } else if(height[left] > height[right]){
            right -= 1;
        } else {
            left += 1;
        }
    }
    return max;
};