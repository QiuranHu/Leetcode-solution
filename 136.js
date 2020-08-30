/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return [...set][0];

    // // Another solution.
    // let answer = 0;
    // for (let num of nums) {
    //     // 0 ^ i = i
    //     // i ^ i = 0
    //     answer = answer ^ num;
    // }
    // return answer;
};