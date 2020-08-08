/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(!word) {
        return false;
    }
    const dfs = (i, j, index) => {
        if(index === word.length) {
            return true;
        }
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return false;
        } 
        if(board[i][j] === word[index]) {
            const temp = board[i][j];
            board[i][j] = '';
            const answer = dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1) || dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1);
            board[i][j] = temp;
            return answer;
        } else {
            return false;
        }
    };
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0]) {
                if(dfs(i, j, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};