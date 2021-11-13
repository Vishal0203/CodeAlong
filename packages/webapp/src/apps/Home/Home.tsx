import React, { FC } from 'react';
import { MyPromise } from '@codealong/utilities';
import styles from './Home.module.scss';

type HomeProps = {
  message?: string;
};

const Home: FC<HomeProps> = ({ message = 'Code along with Vishal' }) => {
  new MyPromise((resolve: any) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  }).then((data: number) => {
    console.log(data);
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>{message}</div>
    </div>
  );
};

export default Home;
