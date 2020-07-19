/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTarget(nums, target, start, end) {
    while(start <= end) {
        const middle = Math.floor((start + end) / 2);
        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target) {
            start = middle + 1;
        } else if(nums[middle] > target) {
            end = middle - 1;
        }
    }
    return -1;
}

function helper(nums, target, start, end) {
    if(start > end) {
        return -1;
    }
    const middle = Math.floor((start + end) / 2);
    // Half of the array is [start, middle]
    // Another half is [middle, end].
    if(nums[start] <= nums[middle]) {
        let answer = -1;
        answer = findTarget(nums, target, start, middle);
        if(answer === -1) {
            return helper(nums, target, middle + 1, end);
        } else {
            return answer;
        }
    } else {
        let answer = -1;
        answer = findTarget(nums, target, middle, end);
        if(answer === -1) {
            return helper(nums, target, start, middle - 1);
        } else {
            return answer;
        }
    }
}
var search = function(nums, target) {
    return helper(nums, target, 0, nums.length - 1);
};