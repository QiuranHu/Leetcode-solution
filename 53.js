/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let current = nums[0];
    for(let i = 1; i < nums.length; i++) {
        current = Math.max(current + nums[i], nums[i]);
        max = Math.max(current, max);
    }
    return max;
};