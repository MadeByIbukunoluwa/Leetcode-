/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
//recursive solution
class Solution {
  TreeNode? invertTree(TreeNode? root) {
      if (root == null) return root;
      TreeNode? temp = root.left;
      root.left = root.right;
      root.right =  temp;
      invertTree(root.left);
      invertTree(root.right);
      return root;
  }
}

//iterative solution
class Solution {
  TreeNode? invertTree(TreeNode? root) {
    if (root == null) return root;
    final list = <TreeNode>[root];
    while (!list.isEmpty) {
      final curr = list.removeLast();
      final temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;

      if (curr.left != null) list.add(curr.left!);
      if (curr.right != null) list.add(curr.right!);
    }
    return root;
  }
}
