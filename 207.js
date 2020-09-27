/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const adjacencyList = [];
    for (let i = 0; i < numCourses; i++) {
        adjacencyList.push(new Set());
    }
    for (let edge of prerequisites) {
        const start = edge[0];
        const end = edge[1];
        adjacencyList[start].add(end);
    }
    const status = [];
    for (let i = 0; i < numCourses; i++) {
        status.push(0);
    }
    // 0: unvisited
    // 1: processed
    // 2: processing
    const visit = (index) => {
        if (status[index] === 1) {
            return true; // No problem.
        }
        if (status[index] === 2) {
            return false; // A circle.
        }
        status[index] = 2;
        for (let nodeIndex of adjacencyList[index].keys()) {
            if (!visit(nodeIndex)) {
                return false;
            }
        }
        status[index] = 1;
        return true;
    };
    for (let i = 0; i < numCourses; i++) {
        if (!visit(i)) {
            return false;
        }
    }
    return true;
};