/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [[]];
    function helper(current, startIndex, length) {
        if(current.length === length) {
            answer.push(current);
            return;
        }
        if(startIndex >= nums.length) {
            return;
        }
        for(let index = startIndex; index < nums.length; index += 1) {
            const copy = current.concat([]);
            copy.push(nums[index]);
            helper(copy, index + 1, length);
        }
    }
    for(let length = 1; length <= nums.length; length++) {
        helper([], 0, length);
    }
    return answer;
};