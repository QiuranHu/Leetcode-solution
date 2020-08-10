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
 * @return {number[]}
 */
// // Recursive solution
// var inorderTraversal = function(root) {
//     const answer = [];
//     const helper = (node) => {
//         if(!node) {
//             return;
//         }
//         helper(node.left);
//         answer.push(node.val);
//         helper(node.right);
//     };
//     helper(root);
//     return answer;
// };

var inorderTraversal = function(root) {
    const answer = [];
    const stack = [];
    let current = root;
    if(current) {
        stack.push(current);
    }
    while(stack.length !== 0) {
        let current = stack.pop();
        if(!current.right && !current.left) {
            answer.push(current.val);
        } else{ 
            if(current.right) {
                stack.push(current.right)
            }
            stack.push(new TreeNode(current.val, null, null));
            if(current.left) {
                stack.push(current.left);
            }
        }
    }
    return answer;
};