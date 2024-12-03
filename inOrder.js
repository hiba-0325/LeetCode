function Inorder (root, res) {
    if(root==null) return;
    
    Inorder(root.left, res);

    let num = root.val;
    res.push(num);

    Inorder(root.right, res);
};
var inorderTraversal = function(root) {
    let res = [];
    Inorder(root, res);
    return res;
};