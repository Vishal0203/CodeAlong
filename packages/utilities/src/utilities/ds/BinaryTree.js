import TreeNode from '../nodes/TreeNode';

class BinaryTree {
  constructor(sequence = []) {
    this.root = null;

    for (let value of sequence) {
      const node = new TreeNode(value);
      this.root = this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (!root) {
      return node;
    }

    if (node.val < root.val) {
      root.left = this.insertNode(root.left, node);
    } else {
      root.right = this.insertNode(root.right, node);
    }

    return root;
  }

  *traverseInOrder() {
    function* traverse(root) {
      if (root.left) yield* traverse(root.left);
      yield root;
      if (root.right) yield* traverse(root.right);
    }

    yield* traverse(this.root);
  }

  *traversePreOrder() {
    function* traverse(root) {
      yield root;
      if (root.left) yield* traverse(root.left);
      if (root.right) yield* traverse(root.right);
    }

    yield* traverse(this.root);
  }

  *traversePostOrder() {
    function* traverse(root) {
      if (root.left) yield* traverse(root.left);
      if (root.right) yield* traverse(root.right);
      yield root;
    }

    yield* traverse(this.root);
  }

  *traverseBfs() {
    const queue = [this.root];
    while (queue.length) {
      const currentNode = queue.shift();
      yield currentNode;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
}

export default BinaryTree;
