var hasPathSum = function(root, targetSum) 
{
    if (root == null) {
        return false;
    }
    targetSum -= root.val;
    if (root.left == null && root.right == null) 
    {
        return targetSum == 0;
    }
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// * Definition for a binary tree node.
// * function TreeNode(val, left, right) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)