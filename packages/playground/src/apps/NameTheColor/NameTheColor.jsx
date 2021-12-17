import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import BreadcrumbContext from '@commons/contexts/BreadcrumbContext';
import { fetchColorByHex } from '@apps/NameTheColor/store/colors';
import styles from './NameTheColor.module.scss';

const NameTheColor = () => {
  const { setCrumbPaths } = useContext(BreadcrumbContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setCrumbPaths([
      { label: 'Home', path: '/' },
      { label: 'Name the color', path: '/name-the-color' },
    ]);
    dispatch(fetchColorByHex());

    return () => setCrumbPaths([]);
  }, []);

  return (
    <div>
      <p className={styles.appHeading}>Name the color</p>
      <p className={styles.paragraph}>
        Search the color by hexcode or RGB code. This app makes requests to an
        API written behind Spring framework, which maintains all the data
        related to colors in an in-memory H2 database.
      </p>
    </div>
  );
};

export default NameTheColor;
