/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => (a - b));
    const result = [];
    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        start = i + 1;
        end = nums.length - 1;
        while(start < end) {
            if(start !== i + 1 && nums[start] === nums[start - 1]) {
                start += 1;
                continue;
            }
            if(nums[start] + nums[end] === -nums[i]) {
                result.push([nums[i], nums[start], nums[end]]);
                start += 1;
            } else if(nums[start] + nums[end] > -nums[i]) {
                end -= 1;
            } else {
                start += 1;
            }
        }
    }
    return result;
};