/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSumHelper(candidates, 
                               map, 
                               target, 
                               currentIndexInCandidates, 
                               currentSolution, 
                               answer) {
    if(target === 0) {
        answer.push(currentSolution);
        return;
    }
    if(currentIndexInCandidates >= candidates.length) {
        return;
    }
    if(target < candidates[currentIndexInCandidates]) {
        return;
    }
    // Check how many time we can use candidates[currentIndexInCandidates].
    let times = map.get(candidates[currentIndexInCandidates]);
    times = Math.min(times, Math.floor(target / candidates[currentIndexInCandidates]));
    // Use 0, 1, 2, ..., times times of candidates[currentIndexInCandidates].
    for(let i = 0; i <= times; i++) {
        let newCurrentSolution = [...currentSolution];
        for(let j = 0; j < i; j++){
            newCurrentSolution.push(candidates[currentIndexInCandidates]);
        }
        combinationSumHelper(candidates, 
                             map, 
                             target - i * candidates[currentIndexInCandidates],
                             currentIndexInCandidates + 1,
                             newCurrentSolution,
                             answer);
    }
}
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => (a - b));
    const candidatesWithoutDuplicates = [...new Set(candidates)];
    const map = new Map();
    for(let num of candidates) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    const answer = [];
    combinationSumHelper(candidatesWithoutDuplicates,
                         map,
                         target,
                         0,
                         [],
                         answer);
    return answer;
};