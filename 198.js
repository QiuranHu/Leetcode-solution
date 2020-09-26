/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const dp = [];
    nums.forEach(num => dp.push(null));
    const helper = (start) => {
        if (start >= nums.length) {
            return 0;
        }
        if (dp[start] !== null) {
            return dp[start];
        }
        const answer = Math.max(helper(start + 1), helper(start + 2) + nums[start]);
        dp[start] = answer;
        return answer;
    };
    return helper(0);
};