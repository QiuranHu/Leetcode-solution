/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Number.POSITIVE_INFINITY;
    for(let i = 0; i < nums.length; i++){
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if(Math.abs(target - closest) > Math.abs(target - sum)) {
                closest = sum;
            }
            if(sum === target) {
                return target;
            } else if(sum < target) {
                left += 1;
            } else if(sum > target) {
                right -= 1;
            }
        }
    }
    return closest;
};