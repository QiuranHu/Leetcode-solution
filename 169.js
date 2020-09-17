/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const timesMap = new Map();
    for (let num of nums) {
        const loopUpResult = timesMap.get(num);
        if (loopUpResult === undefined) {
            timesMap.set(num, 1);
        } else {
            timesMap.set(num, loopUpResult + 1);
        }
    }
    for (let num of nums) {
        if (timesMap.get(num) > Math.trunc(nums.length / 2)) {
            return num;
        }
    }
    return -1;
};