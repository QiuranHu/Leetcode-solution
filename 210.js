/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // First check if it is possible to take all courses.
    const status = [];
    // Status 0: untouched
    // Status 2: processed
    // Status 1: processing
    const graph = [];
    for (let i = 0; i < numCourses; i++) {
        status.push(0);
        graph.push(new Set());
    }
    // If graph[i].has(j) === true, j(before) has to be taken before i(after)
    for (let requirement of prerequisites) {
        const before = requirement[1];
        const after = requirement[0];
        graph[after].add(before);
    }
    const order = [];
    const visit = (courseIndex) => {
        if (status[courseIndex] === 1) {
            return false;
        } else if (status[courseIndex] === 2) {
            return true;
        } else {
            status[courseIndex] = 1;
        }
        for (let beforeCourse of graph[courseIndex]) {
            if (!visit(beforeCourse)) {
                return false;
            }
        }
        status[courseIndex] = 2;
        order.push(courseIndex);
        return true;
    };
    for (let i = 0; i < numCourses; i++) {
        if (!visit(i)) {
            return [];
        }
    }
    return order;
};