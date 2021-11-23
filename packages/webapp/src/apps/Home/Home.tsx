import React, { FC } from 'react';
import styles from './Home.module.scss';

interface IHome {
  message?: string;
}

const Home: FC<IHome> = ({ message = 'Code along with Vishal' }) => (
  <div className={styles.container}>
    <div className={styles.title}>{message}</div>
  </div>
);

export default Home;
