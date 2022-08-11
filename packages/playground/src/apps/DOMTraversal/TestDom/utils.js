export function* traversePreOrder(root) {
  if (!root) return;
  yield root;

  for (let child of root.children) {
    yield* traversePreOrder(child);
  }
}
