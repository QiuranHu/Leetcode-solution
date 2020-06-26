/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s:string, p:string):boolean {
    const dp: boolean[][] = [];
    for(let i:number = 0; i < p.length + 1; i++){
        dp.push([]);
        for(let j: number = 0; j < s.length + 1; j++){
            dp[i].push(false);
        }
    }
    dp[0][0] = true;
    // dp[x][0], x > 0
    for(let i:number = 1; i < p.length + 1; i++) {
        if(p[i - 1] === '*'){
            dp[i][0] = dp[i - 2][0];
        }
        else {
            dp[i][0] = false;
        }
    }
    // dp[0][y], y > 0
    for(let j:number = 1; j < s.length + 1; j++) {
        dp[0][j] = false;
    }

    // dp[x][y], x > 0, y > 0
    for(let i:number = 1; i < p.length + 1; i++){
        for(let j:number = 1; j < s.length + 1; j++){
            if(p[i - 1] === '.' || p[i - 1] === s[j - 1]){
                dp[i][j] = dp[i - 1][j - 1];
            } else if(p[i - 1] === '*'){
                dp[i][j] = dp[i - 2][j] || ((p[i - 2] === s[j - 1] || p[i - 2] === '.') && dp[i][j - 1]);
            } else {
                dp[i][j] = false;
            }
        }
    }
    return dp[p.length][s.length];
};