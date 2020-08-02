/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix || matrix.length === 0) {
        return [];
    }
    const answer = [];
    let topRow = -1;
    let bottomRow = matrix.length;
    let leftColumn = -1;
    let rightColumn = matrix[0].length;
    // (x, y) is the current index.
    let x = 0;
    let y = 0;
    function check(x, y) {
        if(x > topRow && x < bottomRow && y > leftColumn && y < rightColumn) {
            return true;
        }
        return false;
    }
    while(check(x, y)) {
        // Go right until y === rightColumn.
        while(y !== rightColumn) {
            answer.push(matrix[x][y]);
            y += 1;
        }
        y -= 1;
        topRow += 1;
        // Go down until x === bottomRow
        x += 1;
        if(!check(x, y)) {
            break;
        }
        while(x !== bottomRow) {
            answer.push(matrix[x][y]);
            x += 1;
        }
        x -= 1;
        rightColumn -= 1;
        // Go left until y === leftColumn
        y -= 1;
        if(!check(x, y)) {
            break;
        }
        while(y !== leftColumn) {
            answer.push(matrix[x][y]);
            y -= 1;
        }
        y += 1;
        bottomRow -= 1;
        x -= 1;
        // Go up until x === topRow
        if(!check(x, y)) {
            break;
        }
        while(x !== topRow) {
            answer.push(matrix[x][y]);
            x -= 1;
        }
        leftColumn += 1;
        x += 1;
        y += 1; 
    }
    return answer;
};