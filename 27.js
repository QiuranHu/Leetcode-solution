/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = -1; 
    let j = 0;
    while(j < nums.length) {
        while(nums[j] === val) {
            j ++;
        }
        if(j >= nums.length) {
            break;
        }
        i ++;
        nums[i] = nums[j];
        j ++;
    }
    nums.splice(i + 1);
};