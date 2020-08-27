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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -1 * Number.MAX_VALUE;
    const helper = (node) => {
        if(node === null) {
            return 0;
        }
        const left = Math.max(0, helper(node.left));
        const right = Math.max(0, helper(node.right));
        maxSum = Math.max(maxSum, left + right + node.val);
        return Math.max(left, right) + node.val;
    }
    helper(root);
    return maxSum;
};