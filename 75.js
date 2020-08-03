/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // Anything before start are 0s.
    let start = 0;
    // Anything after end are 2s;
    let end = nums.length - 1;
    function swap(x, y) {
        const temp = nums[x];
        nums[x] = nums[y];
        nums[y] = temp;
    }
    let index = 0;
    while(index >= start && index <= end) {
        if(nums[index] === 0) {
            swap(index, start);
            start += 1;
            // Increament index because we have visited nums[start]
            // So nums[start] before swap cannot be 2.
            index += 1;
        }
        else if(nums[index] === 2) {
            swap(index, end);
            end -= 1;
            // nums[end] before swap can be 2.
        } else {
            index += 1;
        }
    }
};