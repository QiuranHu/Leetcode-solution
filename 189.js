/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const swap = (index1, index2) => {
        const temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    };
    const reserve = (start, end) => {
        while (start < end) {
            swap(start, end);
            start += 1;
            end -= 1;
        }
    };
    k = k % nums.length;
    reserve(0, nums.length - 1);
    reserve(0, k - 1);
    reserve(k, nums.length - 1);
};