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
var isValidBST = function (root) {
    // For each node, check node.val < lowerBound and node.val > upperBound.
    const helper = (node, lowerBound, upperBound) => {
        if (node === null) {
            return true;
        }
        let lowerBoundForRightChild = node.val;
        if (lowerBound !== null) {
            if (node.val <= lowerBound) {
                return false;
            }
            lowerBoundForRightChild = Math.max(lowerBoundForRightChild, lowerBound);
        }
        let upperBoundForLeftChild = node.val;
        if (upperBound !== null) {
            if (node.val >= upperBound) {
                return false;
            }
            upperBoundForLeftChild = Math.min(upperBoundForLeftChild, upperBound);
        }
        return true &&
            helper(node.left, lowerBound, upperBoundForLeftChild) &&
            helper(node.right, lowerBoundForRightChild, upperBound)
    };
    return helper(root, null, null);
};