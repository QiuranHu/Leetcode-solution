/**
 * @param {number[][]} points
 * @return {number}
 */
const greatestCommonDevider = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    if (x > y) {
        return greatestCommonDevider(y, x);
    }
    // x < y now.
    if (x === 0) {
        return y;
    }
    return greatestCommonDevider(y % x, x);
}
var maxPoints = function (points) {
    let answer = 0;
    for (let i = 0; i < points.length; i++) {
        let number = 1;
        const slopeMap = new Map();
        const point1 = points[i];
        let numberOfSamePoint = 0;
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue;
            }
            const point2 = points[j];
            if (point1[0] === point2[0] && point1[1] === point2[1]) {
                numberOfSamePoint += 1;
                continue;
            }
            let x;
            let y;
            if (point1[1] >= point2[1]) {
                x = point1[1] - point2[1];
                y = point1[0] - point2[0];
            } else {
                x = point2[1] - point1[1];
                y = point2[0] - point1[0];
            }
            const divider = greatestCommonDevider(x, y);
            const slope = `${x / divider} ${y / divider}`
            if (slopeMap.has(slope)) {
                slopeMap.set(slope, slopeMap.get(slope) + 1);
            } else {
                slopeMap.set(slope, 2);
            }
        }
        number = 1 + numberOfSamePoint;
        for (let slope of slopeMap.keys()) {
            number = Math.max(number, slopeMap.get(slope) + numberOfSamePoint);
        }
        answer = Math.max(number, answer);
    }
    return answer;
};