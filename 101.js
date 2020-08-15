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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const helper = (leftNode, rightNode) => {
        if(leftNode === null && rightNode === null) {
            return true;
        }
        if(leftNode === null || rightNode === null) {
            return false;
        }
        // leftNode != null and rightNode != null
        return leftNode.val === rightNode.val &&
            helper(leftNode.right, rightNode.left) &&
            helper(leftNode.left, rightNode.right)
    }
    return helper(root, root);
};