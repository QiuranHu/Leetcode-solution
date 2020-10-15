/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let answer;
  const traverse = (current) => {
    if (!current) {
      return false;
    }

    let left = traverse(current.left) ? 1 : 0;
    let right = traverse(current.right) ? 1 : 0;
    let mid = current === p || current === q ? 1 : 0;
    if (mid + left + right >= 2) {
      answer = current;
    }
    return mid + left + right > 0;
  };
  traverse(root);
  return answer;
};
