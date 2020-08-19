/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const buildNode = (preStart, preEnd, inStart, inEnd) => {
        if(preStart >= preorder.length || preStart > preEnd || inStart > inEnd) {
            return null;
        }
        // preStart is the root of the tree
        let node = new TreeNode(preorder[preStart]);
        let lengthOfLeftTree = 0;
        let inIndex = inStart;
        while(inorder[inIndex] !== preorder[preStart] && inIndex <= inEnd) {
            inIndex += 1;
            lengthOfLeftTree += 1;
        }
        node.left = buildNode(preStart + 1, preStart + lengthOfLeftTree, inStart, inStart + lengthOfLeftTree - 1);
        node.right = buildNode(preStart + lengthOfLeftTree + 1, preEnd, inStart + lengthOfLeftTree + 1, inEnd);
        return node;
    }
    return buildNode(0, preorder.length - 1, 0, inorder.length - 1);
};