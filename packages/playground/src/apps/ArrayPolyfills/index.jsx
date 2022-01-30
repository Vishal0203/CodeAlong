import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import paths from '@commons/paths';
import BreadcrumbContext from '@commons/contexts/BreadcrumbContext';
import ResultTable from '@apps/ArrayPolyfills/ResultTable';
import '@codealong/utilities/polyfills/arrays';
import styles from './ArrayPolyfills.module.scss';

const ArrayPolyfills = () => {
  const { setCrumbPaths } = useContext(BreadcrumbContext);
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState({});

  useEffect(() => {
    setCrumbPaths([
      { label: 'Home', path: paths.home() },
      { label: 'Array polyfills', path: paths.arrays() },
    ]);

    return () => setCrumbPaths([]);
  }, []);

  const sanitizedInput = useMemo(() => {
    const inputArray = inputValue.split(',');
    return inputArray.map((value) => +value.trim());
  }, [inputValue]);

  const handleInput = useCallback(({ target }) => {
    setInputValue(target.value);
  }, []);

  const handleBlur = useCallback(() => {
    const mapResult = sanitizedInput.myMap(
      function (data) {
        return this.data * data * 2;
      },
      { data: 10 }
    );

    const filterResult = sanitizedInput.myFilter((val) => val % 2 === 0);
    const reduceResult = sanitizedInput.myReduce(
      (acc, value) => acc + value,
      0
    );

    setResults({ mapResult, filterResult, reduceResult });
  }, [sanitizedInput]);

  return (
    <div>
      <p className={styles.paragraph}>
        Writing polyfills for Array.map(), Array.filter() and Array.reduce()
      </p>
      <input
        type="text"
        placeholder="Enter your array"
        onChange={handleInput}
        onBlur={handleBlur}
      />
      {results.mapResult && <ResultTable {...results} />}
    </div>
  );
};

export default ArrayPolyfills;
