var isBalanced = function (root) {
    let isBal = true

    var maxDepth = function (node) {
        if (!node) return 0
        let leftSub = maxDepth(node.left)
        let rightSub = maxDepth(node.right)
        if (Math.abs(leftSub - rightSub) > 1) {
            isBal = false
        }
       
        return Math.max(leftSub, rightSub) + 1
    }
    maxDepth(root)
    return isBal
};