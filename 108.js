/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const buildNode = (start, end) => {
        if(start > end) {
            return null;
        }
        const middle = Math.floor((start + end) / 2);
        const node = new TreeNode(nums[middle]);
        node.left = buildNode(start, middle - 1);
        node.right = buildNode(middle + 1, end);
        return node;
    }
    return buildNode(0, nums.length - 1);
};