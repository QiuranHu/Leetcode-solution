/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (board.length === 0) {
        return;
    }
    const dfs = (x, y) => {
        if (x >= board.length || x < 0 ||
            y < 0 || y >= board[0].length) {
            return;
        }
        if (board[x][y] === 'X') {
            return;
        }
        if (board[x][y] === null) {
            return;
        }
        board[x][y] = null;
        dfs(x + 1, y);
        dfs(x, y + 1);
        dfs(x - 1, y);
        dfs(x, y - 1);
    };
    for (let i = 0; i < board.length; i++) {
        dfs(i, 0); // First column
        dfs(i, board[0].length - 1); // Last column
    }
    for (let j = 0; j < board[0].length; j++) {
        dfs(0, j); // First row
        dfs(board.length - 1, j); // Last row
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === null) {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
};