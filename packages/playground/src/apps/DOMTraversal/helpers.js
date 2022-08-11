export const calculateTraversals = (tree) => {
  const result = {
    inOrder: [],
    preOrder: [],
    postOrder: [],
    bfsOrder: [],
  };

  for (let node of tree.traverseInOrder()) {
    result.inOrder.push(node.val);
  }

  for (let node of tree.traversePreOrder()) {
    result.preOrder.push(node.val);
  }

  for (let node of tree.traversePostOrder()) {
    result.postOrder.push(node.val);
  }

  for (let node of tree.traverseBfs()) {
    result.bfsOrder.push(node.val);
  }

  return result;
};

export const renderNode = (array) =>
  array.map((node, index) => (index === array.length - 1 ? node : `${node}, `));
