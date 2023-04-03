const getSelectors = (() => {
  let cache = {
    lookupIds: {},
    lookupClasses: {},
  };

  const getElementById = (lookupId) => {
    if (cache.lookupIds.hasOwnProperty(lookupId)) {
      console.info('[getElementById] Reading from cache!');
      return cache.lookupIds[lookupId];
    }

    for (let node of traversePreOrder(document.body)) {
      if (node.id === lookupId) {
        cache.lookupIds[lookupId] = node;
        return node;
      }
    }
  };

  const getElementsByClass = (lookupClass) => {
    if (cache.lookupClasses.hasOwnProperty(lookupClass)) {
      console.info('[getElementsByClass] Reading from cache!');
      return cache.lookupClasses[lookupClass];
    }

    const result = [];
    for (let node of traversePreOrder(document.body)) {
      if (node.classList.contains(lookupClass)) {
        result.push(node);
      }
    }

    cache.lookupClasses[lookupClass] = result;
    return result;
  };

  // #lookup-id .lookup-class
  const querySelector = (query) => {
    const queries = query.split(' ').map((str) => str.trim());
    let currentNode = document.body;
    while (queries.length && currentNode) {
      const currentQuery = queries.shift();
      let found = false;

      for (let node of traversePreOrder(currentNode)) {
        if (node.matches(currentQuery)) {
          found = true;
          currentNode = node;
          break;
        }
      }

      if (!found) {
        currentNode = null;
      }
    }

    return currentNode;
  };

  return { getElementById, getElementsByClass, querySelector };
})();

function* traversePreOrder(root) {
  if (!root) return;
  yield root;

  for (let child of root.children) {
    yield* traversePreOrder(child);
  }
}

export default getSelectors;
