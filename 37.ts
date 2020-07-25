/**
 Do not return anything, modify board in-place instead.
 */
// Return the first position of '.'.
function findNextPosition(board: string[][]): number[] {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === '.') {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};
// Check if it is valid to put num in position [x, y].
function isValid(board: string[][], x: number, y: number, num: number): boolean {
    const numString = String(num);
    // Check the row.
    for(let j = 0; j < board[0].length; j++) {
        if(board[x][j] === numString) {
            return false;
        }
    }
    // Check the column.
    for(let i = 0; i < board.length; i++) {
        if(board[i][y] === numString) {
            return false;
        }
    }
    // Check the sub-box.
    const subBoxX = Math.floor(x / 3);
    const subBoxY = Math.floor(y / 3);
    for(let i = subBoxX * 3; i < subBoxX * 3 + 3; i++) {
        for(let j = subBoxY * 3; j < subBoxY * 3 + 3; j++) {
            if(board[i][j] === numString) {
                return false;
            }
        }
    }
    return true;
};
function solveSudokuHelper(board: string[][]): boolean {
    const position = findNextPosition(board);
    if(position[0] === -1) {
        return true;
    }
    const x = position[0];
    const y = position[1];
    for(let i = 1; i < 10; i++) {
        if(isValid(board, x, y, i)) {
            board[x][y] = String(i);
            if(solveSudokuHelper(board)) {
                return true;
            } else {
                board[x][y] = '.';
            }
        }
    }
    return false;
}
function solveSudoku(board: string[][]): void {
    solveSudokuHelper(board);
};