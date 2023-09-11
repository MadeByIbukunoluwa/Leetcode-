/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Codec
{

    // Encodes a tree to a single string.
    public string serialize(TreeNode root)
    {
        List<string> res = new List<string>();
        void dfs(TreeNode node)
        {
            if (node == null)
            {
                res.Add("null");
                return;
            }
            res.Add(node.val.ToString());
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return string.Join(",", res);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(string data)
    {
        string[] values = data.Split(',');
        int index = 0;
        TreeNode dfs()
        {
            if (values[index] == "null")
            {
                index += 1;
                return null;
            }
            TreeNode node = new TreeNode(int.Parse(values[index]));
            index += 1;
            node.left = dfs();
            node.right = dfs();
            return node;
        }
        return dfs();
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));

// The input [1,null,2,3] represents the serialized format of a binary tree using level order traversal, where null signifies a path terminator where no node exists below.

