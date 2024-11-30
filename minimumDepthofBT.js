var minDepth = function (root) {
  if (root === null) return;
  let queue = [root];
  let level = 1;

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (node.left === null && node.right === null) {
        return level;
      }

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
  level++;
};
