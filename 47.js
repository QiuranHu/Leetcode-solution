/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums === null && nums.length === 0) {
        return [];
    }
    const answer = [];
    function helper(used, current) {
        if(current.length === nums.length) {
            answer.push(current.concat([]));
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i] === false) {
                current.push(nums[i]);
                used[i] = true;
                helper(used, current);
                current.pop();
                used[i] = false;
                while(nums[i] === nums[i + 1]) {
                    i++;
                }
            }
        }
    }
    nums.sort((a, b) => a - b);
    const used = nums.map((num) => false);
    helper(used, []);
    return answer;
};