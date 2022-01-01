import React from 'react';
import { Link } from 'react-router-dom';

import { PROJECTS } from './constants';
import styles from './Home.module.scss';

const Home = () => (
  <div>
    <p className={styles.greet}>Hello there! 🙋🏻‍♂️</p>
    <p className={styles.paragraph}>
      This application will be used as a playground for different kinds of
      projects and demonstrations done on my YouTube channel Code along with
      Vishal.
    </p>
    <p className={styles.paragraph}>
      Jump to the demos through the links below -
    </p>
    <ol className={styles.paragraph}>
      {PROJECTS.map(({ name, path }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ol>
  </div>
);

export default Home;
