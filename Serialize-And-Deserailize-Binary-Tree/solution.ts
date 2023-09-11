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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let res = [];
  function dfs(node: TreeNode | null) {
    if (node == null) {
      res.push("null");
      return;
    }
    res.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return res.join();
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let values = data.split(",");
  let i = 0;
  function dfs() {
    if (values[i] == "null") {
      i += 1;
      return null;
    }
    let node = new TreeNode(Number(values[i]));
    i += 1;
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
//  The input [1,null,2,3] represents the serialized format of a binary tree using level order traversal, where null signifies a path terminator where no node exists below.
