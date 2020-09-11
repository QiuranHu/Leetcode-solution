/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let curMax = nums[0];
    let curMin = nums[0];
    let answer = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const candidates = [curMax * nums[i], curMin * nums[i], nums[i]];
        curMax = Math.max(...candidates);
        curMin = Math.min(...candidates);
        answer = Math.max(curMax, answer);
    }
    return answer;
};