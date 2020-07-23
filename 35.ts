function findTarget(nums: number[], target: number, start: number, end: number):number {
    if(start > end) {
        return start;
    }
    const middle: number = Math.floor((start + end) / 2);
    if(nums[middle] < target) {
        return findTarget(nums, target, middle + 1, end);
    } else if(nums[middle] > target) {
        return findTarget(nums, target, start, middle - 1);
    } else {
        return middle;
    }
}
function searchInsert(nums: number[], target: number): number {
    return findTarget(nums, target, 0, nums.length - 1);
};