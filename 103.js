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
var zigzagLevelOrder = function(root) {
    if(!root) {
        return [];
    }
    const answer = [];
    let currentLevel = [root];
    let nextLevel = [];
    let isReverseOrder = false;
    while(currentLevel.length !== 0) {
        let currentLevelValues = [];
        while(currentLevel.length !== 0) {
            let node;
            if(!isReverseOrder) {
                node = currentLevel.shift();
            } else {
                node = currentLevel.pop();
            }
            currentLevelValues.push(node.val);
            if(!isReverseOrder) {
                if(node.left) {
                    nextLevel.push(node.left);
                }
                if(node.right) {
                    nextLevel.push(node.right);
                }
            } else {
                if(node.right) {
                    nextLevel.unshift(node.right);
                }
                if(node.left) {
                    nextLevel.unshift(node.left);
                }
            }
        }
        answer.push(currentLevelValues);
        currentLevel = nextLevel;
        nextLevel = [];
        isReverseOrder = !isReverseOrder;
    }
    return answer;
};