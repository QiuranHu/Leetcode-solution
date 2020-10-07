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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const array = [];
  const inorderTraverse = (node) => {
    if (!node) {
      return;
    }
    inorderTraverse(node.left);
    array.push(node.val);
    inorderTraverse(node.right);
  };
  inorderTraverse(root);
  return array[k - 1];
};
