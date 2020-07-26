/**
 * @param {number[]} nums
 * @return {number}
 */
function isOnePresent(nums) {
    for(let num of nums) {
        if(num === 1) {
            return true;
        }
    }
    return false;
}
function changeToOne(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums.length || nums[i] <= 0) {
            nums[i] = 1;
        }
    }
}
var firstMissingPositive = function(nums) {
    // Check if 1 is in nums.
    if(isOnePresent(nums) === false){
        return 1;
    }
    // Change any number in nums which is >= nums.length or <= 0 to 1,
    // because these numbers are not useful in this problem.
    changeToOne(nums);
    for(let i = 0; i < nums.length; i++){
        const current = Math.abs(nums[i]);
        if(nums[current - 1] > 0) {
            nums[current - 1] = - nums[current - 1];
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            return i + 1;
        }
    }
    return nums.length + 1;
};