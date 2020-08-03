/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // Basic idea: use the first row and the first column to represent 
    // which row and column should be 0.
    
    let shouldRemoveFirstRow = false;
    let shouldRemoveFirstColumn = false;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                // Row
                if(i !== 0) {
                    matrix[i][0] = 0;
                } else {
                    shouldRemoveFirstRow = true;
                }
                // Column
                if(j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    shouldRemoveFirstColumn = true;
                }
            }
        }
    }
    for(let i = 1; i < matrix.length; i++) {
        if(matrix[i][0] === 0) {
            for(let j = 0; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    for(let j = 1; j < matrix[0].length; j++) {
        if(matrix[0][j] === 0) {
            for(let i = 0; i < matrix.length; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    if(shouldRemoveFirstColumn) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
    if(shouldRemoveFirstRow) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }
};