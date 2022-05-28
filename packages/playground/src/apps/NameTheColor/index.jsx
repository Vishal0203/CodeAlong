import React, { useEffect, useContext, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import paths from '@commons/paths';
import { debounce, MyPromise } from '@codealong/utilities';
import BreadcrumbContext from '@commons/contexts/BreadcrumbContext';
import { fetchColorByHex, fetchColorByRgb } from './store/dispatchers';
import styles from './NameTheColor.module.scss';

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
})
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data);
  });

const NameTheColor = () => {
  const { setCrumbPaths } = useContext(BreadcrumbContext);
  const dispatch = useDispatch();
  const { name, rgb } = useSelector(({ ntc }) => ntc.colorDetails);

  useEffect(() => {
    setCrumbPaths([
      { label: 'Home', path: paths.home() },
      { label: 'Name the color', path: paths.ntc() },
    ]);

    return () => setCrumbPaths([]);
  }, []);

  const handleFetchByHex = useCallback(
    debounce(({ target: { value } }) => {
      dispatch(fetchColorByHex(value));
    }, 500),
    [dispatch]
  );

  const handleFetchByRgb = useCallback(
    debounce(({ target: { value } }) => {
      dispatch(fetchColorByRgb(value));
    }, 500),
    [dispatch]
  );

  return (
    <div>
      <p className={styles.appHeading}>Name the color</p>
      <p className={styles.paragraph}>
        Search the color by hexcode or RGB code. This app makes requests to an
        API written behind Spring framework, which maintains all the data
        related to colors in an in-memory H2 database.
      </p>
      <div className={styles.appContainer}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Search hexcode"
            onChange={handleFetchByHex}
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Search RGB code"
            onChange={handleFetchByRgb}
          />
        </div>
        <div className={styles.colorContainer}>
          {name && rgb && (
            <Fragment>
              <div
                className={styles.background}
                style={{ background: `rgb(${rgb})` }}
              />
              <p className={styles.colorName}>{name}</p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameTheColor;
