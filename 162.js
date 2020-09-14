/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    // Note that no two consecutive elements are equal.
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const middle = Math.trunc((start + end) / 2);
        if (nums[middle] < nums[middle + 1]) {
            start = middle + 1;
        } else if (nums[middle] > nums[middle + 1]) {
            end = middle;
        }
    }
    return start;
};