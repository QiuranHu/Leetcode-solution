/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 0) {
        return [];
    }
    if(nums.length === 1) {
        return [nums];
    }
    const answer = [[nums[0]]];
    for(let index = 1; index < nums.length; index++){
        // Array in answer should have index number of elements.
        while(answer[0].length === index){
            const array = answer.shift();
            for(let insertPosition = 0; insertPosition <= array.length; insertPosition++) {
                const newArray = array.concat([]);
                newArray.splice(insertPosition, 0, nums[index]);
                answer.push(newArray);
            }
        }
    }
    return answer;
};