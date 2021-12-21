import React, { useEffect, useContext, useCallback, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { debounce } from '@codealong/utilities';
import paths from '@commons/paths';
import BreadcrumbContext from '@commons/contexts/BreadcrumbContext';
import {
  fetchColorByHex,
  fetchColorByRgb,
} from '@apps/NameTheColor/store/colors';
import styles from './NameTheColor.module.scss';

const NameTheColor = () => {
  const { rgb, name } = useSelector(({ ntc }) => {
    const {
      colors: { colorData },
    } = ntc;
    return colorData;
  });

  const { setCrumbPaths } = useContext(BreadcrumbContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setCrumbPaths([
      { label: 'Home', path: paths.home() },
      { label: 'Name the color', path: paths.ntc() },
    ]);

    return () => setCrumbPaths([]);
  }, []);

  const handleHexChange = useCallback(
    debounce(
      ({ target: { value } }) => value && dispatch(fetchColorByHex(value)),
      300
    ),
    [dispatch]
  );

  const handleRgbChange = useCallback(
    debounce(
      ({ target: { value } }) => value && dispatch(fetchColorByRgb(value)),
      300
    ),
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
            onChange={handleHexChange}
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Search RGB code"
            onChange={handleRgbChange}
          />
        </div>
        <div className={styles.colorContainer}>
          {rgb && name && (
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
