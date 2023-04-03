import React, { useContext, useEffect, useMemo } from 'react';
import BreadcrumbContext from '@commons/contexts/BreadcrumbContext';
import paths from '@commons/paths';
import { BinaryTree } from '@codealong/utilities';

import ResultTable from '@apps/DOMTraversal/ResultTable';
import { calculateTraversals } from '@apps/DOMTraversal/helpers';
import TestDom from '@apps/DOMTraversal/TestDom';
import styles from '@apps/DOMTraversal/DOMTraversal.module.scss';
import treeSvg from './diagram/tree.svg';

const DOMTraversal = () => {
  const treeSequence = [4, 2, 1, 3, 6, 5, 7];
  const { setCrumbPaths } = useContext(BreadcrumbContext);
  const tree = useMemo(() => new BinaryTree(treeSequence), [treeSequence]);

  useEffect(() => {
    setCrumbPaths([
      { label: 'Home', path: paths.home() },
      { label: 'DOM Traversals', path: paths.domTraversal() },
    ]);

    return () => setCrumbPaths([]);
  }, []);

  const results = useMemo(() => calculateTraversals(tree), [tree]);

  return (
    <div>
      <p className={styles.paragraph}>DOM Traversals</p>
      <div className={styles.treeContainer}>
        <img src={treeSvg} alt="tree representation" />
        <div className={styles.traversals}>
          <ResultTable results={results} />
        </div>
      </div>
      <TestDom />
    </div>
  );
};

export default DOMTraversal;
