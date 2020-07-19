/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
    const findTarget = (start) => {
        let cur = start + 1;
        while(cur < nums.length) {
            if(cur === nums.length - 1 && nums[cur] > nums[start]) {
                return cur;
            } else if(nums[cur] > nums[start] && cur + 1 < nums.length && nums[cur + 1] <= nums[start]) {
                return cur;
            }
            cur ++;
        }
        return -1;
    };
    const swap = (a, b) => {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    };
    const reverse = (start, end) => {
        if(start < end) {
            swap(start, end);
            reverse(start + 1, end - 1);
        }
    };
    let cur = nums.length - 2;
    // Find the cur satisfying nums[cur] < nums[cur + 1]
    while(cur >= 0) {
        if(nums[cur] >= nums[cur + 1]) {
            cur --;
        } else {
            let indexOfTheTarget = findTarget(cur);
            swap(cur, indexOfTheTarget);
            reverse(cur + 1, nums.length - 1);
            return nums;
        }
    }
    reverse(0, nums.length - 1);
    return nums;
};