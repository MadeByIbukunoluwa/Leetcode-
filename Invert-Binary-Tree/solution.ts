
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
    // recursive version
    if (root == null) return null;
    if ((root.left == null )&& (root.right == null)) return root;
    let temp1 = root.left;
    root.left = root.right;
    root.right = temp1;
    invertTree(root.left)
    invertTree(root.right)
    return root
};



//iterative version 
// since in javascript we don't have queues , we would use arrays 

function invertTree(root: TreeNode | null): TreeNode | null {
 if (root == null) return root;

 const stack = [];

 stack.unshift(root);

 while (stack.length != 0) {
   let curr = stack.shift();

   let temp = curr.left;
   curr.left = curr.right;
   curr.right = temp;

   if (curr.right != null) {
     stack.unshift(curr.right);
   }

   if (curr.left != null) {
     stack.unshift(curr.left);
   }
 }
 return root;
}