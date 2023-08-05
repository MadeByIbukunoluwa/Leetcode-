/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution
{
    public int MaxDepth(TreeNode root)
    {
        // if (root == null) return 0;
        // return 1 + Math.Max(MaxDepth(root.left),MaxDepth(root.right));
        Stack stack = new Stack();
        int res = 0;
        while (stack.Count != 0)
        {
            var array = stack.Pop();
            TreeNode node = array[0];
            int node = array[1];
            if (node != null)
            {
                res = Math.Max(res, depth);
                stack.Push([root.left, depth + 1]);
                stack.Push([root.right, depth + 1]);
            }
        }
        return res;
    }
}