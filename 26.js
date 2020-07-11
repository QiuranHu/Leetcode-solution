/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return;
    }
    let current = nums[0];
    let i = 1
    while(i < nums.length) {
        if(nums[i] === current) {
            nums.splice(i, 1);
        } else {
            current = nums[i];
            i++;
        }
    }
};