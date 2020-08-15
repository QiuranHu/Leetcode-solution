/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // Store current level in an array.
    // Store next level in an array.
    // In every iteration, let current level be next level.
    if(!root) {
        return [];
    }
    const answer = [];
    let currentLevel = [root];
    let nextLevel = [];
    while(currentLevel.length !== 0) {
        let currentLevelValues = [];
        while(currentLevel.length !== 0) {
            let node = currentLevel.shift();
            currentLevelValues.push(node.val);
            if(node.left) {
                nextLevel.push(node.left);
            }
            if(node.right) {
                nextLevel.push(node.right);
            }
        }
        answer.push(currentLevelValues);
        currentLevel = nextLevel;
        nextLevel = [];
    }
    return answer;
};