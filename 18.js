/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const results = [];
    for(let i = 0; i < nums.length; i++){
        if(i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for(let j = i + 1; j < nums.length; j++) {
            if(j !== i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = nums.length - 1;
            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);
                    left += 1;
                } else if(sum < target) {
                    left += 1;
                } else {
                    right -= 1;
                }
                while(left !== j + 1 && nums[left] === nums[left - 1]) {
                    left += 1;
                }
            }
        }
    }
    return results;
};