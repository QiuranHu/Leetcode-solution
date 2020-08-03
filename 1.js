/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    nums.forEach((value, index) => {
        map.set(value, index);
    });
    for(let index = 0; index < nums.length; index++) {
        const value = nums[index];
        const valueToFind = target - value;
        const lookupResut = map.get(valueToFind);
        if(lookupResut && lookupResut !== index) {
            return [index, lookupResut];
        }
    }
};