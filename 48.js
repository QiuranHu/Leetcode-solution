/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(matrix === null || matrix.length === 0) {
        return [];
    }
    function swap(x1, y1, x2, y2) {
        let temp = matrix[x1][y1];
        matrix[x1][y1] = matrix[x2] [y2];
        matrix[x2][y2] = temp;
    }
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i + 1; j < matrix[0].length; j++) {
            swap(i, j, j, i);
        }
    }
    for(let i = 0; i < matrix.length; i++) {
        let left = 0;
        let right = matrix[0].length - 1;
        while(left < right) {
            swap(i, left, i, right);
            left ++;
            right --;
        }
    }
};