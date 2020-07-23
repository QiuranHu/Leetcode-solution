function findLeft(nums: number[], target: number, start: number, end: number, results: number[]) {
    if(start > end) {
        return;
    } else if(start === end) {
        if(nums[start] === target) {
            results[0] = Math.min(results[0], start);
        }
        return;
    }
    const middle = Math.floor((start + end) / 2);
    if(nums[middle] < target) {
        findLeft(nums, target, middle + 1, end, results);
    } else if(nums[middle] > target) {
        findLeft(nums, target, start, middle - 1, results);
    } else {
        findLeft(nums, target, start, middle, results);
    }
}

function findRight(nums: number[], target: number, start: number, end: number, results: number[]) {
    if(start > end) {
        return;
    }
    if(start === end) {
        if(nums[start] === target) {
            results[1] = Math.max(results[1], start);
        }
        return;
    }
    const middle = Math.floor((start + end + 1) / 2);
    if(nums[middle] < target) {
        findRight(nums, target, middle + 1, end, results);
    } else if(nums[middle] > target) {
        findRight(nums, target, start, middle - 1, results);
    } else {
        findRight(nums, target, middle, end, results);
    }
}
function searchRange(nums: number[], target: number): number[] {
    const results = [nums.length, -1];
    findLeft(nums, target, 0, nums.length - 1, results);
    findRight(nums, target, 0, nums.length - 1, results);
    if(results[0] === nums.length) {
        results[0] = -1;
    }
    return results;
};