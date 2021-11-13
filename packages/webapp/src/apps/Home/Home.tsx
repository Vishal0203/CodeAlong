import React, { FC } from 'react';
import styles from './Home.module.scss';

type HomeProps = {
  message?: string;
};

const Home: FC<HomeProps> = ({ message = 'Code along with Vishal' }) => (
  <div className={styles.container}>
    <div className={styles.title}>{message}</div>
  </div>
);

export default Home;
