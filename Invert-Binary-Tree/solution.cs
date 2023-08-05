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

 //recursive solution 
public class Solution
{
    public TreeNode InvertTree(TreeNode root)
    {
        if (root == null) return null;
        if (root.left == null && root.right == null) return root;
        TreeNode temp1 = root.left ;
        root.left = root.right;
        root.right = temp1;
        InvertTree(root.left);
        InvertTree(root.right);
        return root;
        // object reference not set to an instance of an object error would occur if you handle the condition for null cases
    }
}

//iterative solution 
public class Solution
{
    public TreeNode InvertTree(TreeNode root)
    {
        if (root == null) return root;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        stack.Push(root);
        while (!(stack.Count == 0))
        {
            TreeNode curr = stack.Pop();
            TreeNode temp = curr.left;
            curr.left = curr.right;
            curr.right = temp;
            if (curr.left != null) stack.Push(curr.left);
            if (curr.right != null) stack.Push(curr.right);
        }
        return root;
    }
}

