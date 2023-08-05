import 'dart:collection';

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  List<List<int>> levelOrder(TreeNode? root) {
    List<List<int>> result = [];
    if (root == null) return result;
    Queue<TreeNode> q = new Queue<TreeNode>();
    q.addFirst(root);

    while (!q.isEmpty) {
      List<int> level = [];
      int length = q.length;

      while (length > 0) {
        TreeNode node = q.removeFirst();
        print(node);
        level.add(node.val);

        if (node.left != null) {
          q.addLast(node.left!);
        }

        if (node.right != null) {
          q.addLast(node.right!);
        }

        length--;
      }

      if (level.isNotEmpty) {
        result.add(level);
      }
    }
    return result;
  }
}


// using for loop instead
class Solution {
  List<List<int>> levelOrder(TreeNode? root) {
    List<List<int>> result = [];
    if (root == null) return result;
    Queue<TreeNode> q = new Queue<TreeNode>();
    q.addFirst(root);

    while (!q.isEmpty) {
      List<int> level = [];
      int length = q.length;

      for (int i = 0; i < length; i++) {
        TreeNode node = q.removeFirst();
        level.add(node.val);

        if (node.left != null) {
          q.addLast(node.left!);
        }

        if (node.right != null) {
          q.addLast(node.right!);
        }
      }

      if (level.isNotEmpty) {
        result.add(level);
      }
    }
    return result;
  }
}
