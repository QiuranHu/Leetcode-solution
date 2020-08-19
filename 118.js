/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) {
        return [];
    }
    const answer = [[1]];
    for(let i = 1; i < numRows; i++) {
        const lastLayer = answer[i - 1];
        const thisLayer = [];
        for(let i = 0; i < lastLayer.length - 1; i++) {
            thisLayer.push(lastLayer[i] + lastLayer[i + 1]);
        }
        thisLayer.push(1);
        thisLayer.unshift(1);
        answer.push(thisLayer);
    }
    return answer;
};