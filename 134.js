/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    // https://www.youtube.com/watch?v=wDgKaNrSOEI
    let totalGas = 0;
    gas.forEach(g => totalGas += g);
    let totalCost = 0;
    cost.forEach(c => totalCost += c);
    if (totalGas < totalCost) {
        return -1;
    }
    let currentGas = 0;
    let startIndex = 0;
    for (let i = 0; i < gas.length; i++) {
        if (currentGas + gas[i] < cost[i]) {
            // currentIndex is not a valid answer,
            // go to next position (i + 1).
            startIndex = i + 1;
            currentGas = 0;
        } else {
            currentGas += gas[i] - cost[i];
        }
    }
    return startIndex;
};