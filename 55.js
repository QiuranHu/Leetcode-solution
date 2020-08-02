/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let currentMax = 0;
    let nextMax = 0;
    // The search range is [curentMax, nextMax(inclusive)].
    while(currentMax <= nextMax) {
        if(nextMax >= nums.length - 1) {
            return true;
        }
        if(currentMax === nextMax && nums[currentMax] === 0) {
            return false;
        }
        let newNextMax = nextMax;
        for(let i = currentMax; i <= nextMax; i++) {
            newNextMax = Math.max(newNextMax, i + nums[i]);
        }
        currentMax = nextMax;
        nextMax = newNextMax;
    }
    return false;
};