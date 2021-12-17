import React, { useState } from 'react';
import { Outlet } from 'react-router';

import BreadcrumbContext from '@commons/contexts/BreadcrumbContext';
import styles from './Layout.module.scss';
import { Link } from 'react-router-dom';

const Layout = () => {
  const [crumbPaths, setCrumbPaths] = useState([]);

  return (
    <div className={styles.container}>
      <BreadcrumbContext.Provider value={{ crumbPaths, setCrumbPaths }}>
        <header>
          <h1 className={styles.pageHeading}>
            <span>The Playground</span>
            <span className={styles.tagline}>// Code Along with Vishal</span>
          </h1>
          {crumbPaths.length > 0 && (
            <ul className={styles.breadCrumbs}>
              {crumbPaths.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          )}
        </header>
        <Outlet />
      </BreadcrumbContext.Provider>
    </div>
  );
};

export default Layout;
