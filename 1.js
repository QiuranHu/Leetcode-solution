/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let map = new Map();
    nums.map((value, index) => {
        map.set(value, index);
    })
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            let indexOfAnotherELement = map.get(target - nums[i]);
            if( i !== indexOfAnotherELement) {
                return [i, indexOfAnotherELement];
            }
        }
    }
};