/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((interval1, interval2) => {
        return interval1[0] - interval2[0]
    });
    const answer = [];
    // interval1[0] <= interval2[0]
    function checkOverlapping(interval1, interval2) {
        if(interval1[1] < interval2[0]) {
            return false;
        } else {
            return true;
        }
    }
    function merge(interval1, interval2) {
        const start = Math.min(interval1[0], interval2[0]);
        const end = Math.max(interval1[1], interval2[1]);
        return [start, end];
    }
    for(let i = 0; i < intervals.length; i++) {
        if(answer.length === 0) {
            answer.push(intervals[0]);
        } else {
            if(!checkOverlapping(answer[answer.length - 1], intervals[i])) {
                answer.push(intervals[i]);
            } else {
                const interval = answer.pop();
                answer.push(merge(interval, intervals[i]));
            }
        }
    }
    return answer;
};