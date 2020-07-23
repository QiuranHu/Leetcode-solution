function isValidSudoku(board: string[][]): boolean {
    // Use array instead of set.
    // Check rule No.1.
    const array = [];
    for(let i = 0; i < 10; i++) {
        array.push(-1);
    }
    function clearArray(array: number[]) {
        for(let i = 1; i < 10; i++) {
            array[i] = -1;
        }
    }
    for(let i = 0; i < 9; i++) {
        clearArray(array);
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') {
                continue;
            }
            if(array[Number(board[i][j])] === 1) {
                return false;
            } else {
                array[Number(board[i][j])] = 1;
            }
        }
    }
    
    // Check rule No.2.
    for(let j = 0; j < 9; j++) {
        clearArray(array);
        for(let i = 0; i < 9; i++) {
            if(board[i][j] === '.') {
                continue;
            }
            if(array[Number(board[i][j])] === 1) {
                return false;
            } else {
                array[Number(board[i][j])] = 1;
            }
        }
    }
    
    // Check rule No.3.
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            clearArray(array);
            for(let ii = i * 3; ii < i * 3 + 3; ii ++) {
                for(let jj = j * 3; jj < j * 3 + 3; jj++) {
                    if(board[ii][jj] === '.') {
                        continue;
                    }
                    if(array[Number(board[ii][jj])] === 1) {
                        return false;
                    } else {
                        array[Number(board[ii][jj])] = 1
                    }
                }
            }
        }
    }
    
    // After checking 3 rules, return true.
    return true;
};