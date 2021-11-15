import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

import paths from '@commons/paths';
import { NavItemProps, NavBarProps } from '@commons/types';
import styles from './NavBar.module.scss';

const classnames = cx.bind(styles);
const NavItem: FC<NavItemProps> = ({ label, link }) => {
  const { pathname } = useLocation();
  const className = classnames(styles.navbarItem, {
    [styles.active]: pathname === link,
  });

  return (
    <li>
      <Link className={className} to={link}>
        <span>{label}</span>
      </Link>
    </li>
  );
};

const NavBar: FC<NavBarProps> = ({ options }) => (
  <nav className={styles.navbarContainer}>
    <Link className={styles.brand} to={paths.home()}>
      <span className={styles.brandLogo} />
      <span className={styles.brandName}>Vishal Sharma</span>
    </Link>
    <ul className={styles.navbarLinks}>
      {options.map((option) => (
        <NavItem key={option.link} {...option} />
      ))}
    </ul>
  </nav>
);

export default NavBar;
