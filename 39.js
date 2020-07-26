/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSumHelper(candidates, target, currentSet, start, answer) {
    if(target === 0) {
        answer.push(currentSet);
        return;
    }
    if(start >= candidates.length) {
        return;
    }
    if(target < candidates[start]){
        return;
    }
    
    // Step 1: figure out how many times candidates[start] can be used at most.
    const times = Math.floor(target / candidates[start]);
    // Step 2: use candidates[start].
    for(let i = 0; i <= times; i++) {
        let newSet = [...currentSet];
        for(let j = 0; j < i; j++) {
            newSet.push(candidates[start]);
        }
        combinationSumHelper(candidates, target - i * candidates[start], newSet, start + 1, answer);
    }
}
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => (a - b));
    const answer = [];
    combinationSumHelper(candidates, target, [], 0, answer);
    return answer;
};