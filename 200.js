/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let answer = 0;
    const visit = (x, y) => {
        if (grid[x][y] === '1') {
            answer += 1;
            mark(x, y);
        }
    };
    const mark = (x, y) => {
        if (x >= grid.length || y >= grid[0].length || x < 0 || y < 0) {
            return;
        }
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        } else {
            return;
        }
        mark(x - 1, y);
        mark(x + 1, y);
        mark(x, y + 1);
        mark(x, y - 1);
    };
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            visit(i, j);
        }
    }
    return answer;
};