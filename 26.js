/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return;
    }
    let i = 0;
    let j = i;
    while(j < nums.length) {
        while(nums[j] === nums[i]) {
            j ++;
        }
        if(j >= nums.length) {
            break;
        }
        i++;
        nums[i] = nums[j];
    }
    nums.splice(i + 1);
};