import React, { useEffect, useState } from 'react';
import { IMemoizeAsync } from '@commons/types';
import { generateHashKey, memoizeAsync } from '@codealong/utilities';
import styles from './Problems.module.scss';

const END_POINT = 'http://localhost:8000/greet/neeraj';

interface IMessage {
  message: string;
}

const Problems = () => {
  const [message, setMessage] = useState<IMessage>();

  useEffect(() => {
    const config: IMemoizeAsync = {
      url: END_POINT,
      key: generateHashKey(['GET', END_POINT]),
    };

    memoizeAsync(config, (data: IMessage) => setMessage(data));
  }, []);

  return (
    <div className={styles.container}>
      {message && <p>{message.message}</p>}
    </div>
  );
};

export default Problems;
