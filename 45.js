/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currentMaxIndex = 0;// Corresponding to 0 jumps.
    let nextMaxIndex = nums[0]; // Corresponding to 1 jumps.
    let count = 0;
    // Elements before start has been visited.
    // Elements between currentMaxIndex + 1
    // and end (inclusive) will be visited.
    while(true) {
        if(currentMaxIndex >= nums.length - 1){
            return count;
        }
        count ++;
        let newCurrent = nextMaxIndex;
        let newNext = nextMaxIndex;
        for(let i = currentMaxIndex + 1; i < nextMaxIndex + 1; i++) {
            if(i >= nums.length) {
                break;
            }
            newNext = Math.max(nums[i] + i, newNext);
        }
        currentMaxIndex = newCurrent;
        nextMaxIndex = newNext;
    }
    return count;
};