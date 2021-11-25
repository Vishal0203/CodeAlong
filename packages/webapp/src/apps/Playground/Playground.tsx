import React, { useEffect, useState } from 'react';

import { generateHashKey } from '@codealong/utilities';
import { memoizeAsync } from '@commons/utils';
import { IMemoizeAsync } from '@commons/types';
import styles from './Playground.module.scss';

const END_POINT = 'http://localhost:8000/greet/vishal';

interface IMessage {
  message: string;
}

const Playground = () => {
  const [message, setMessage] = useState<IMessage>();

  useEffect(() => {
    const config: IMemoizeAsync = {
      url: END_POINT,
      key: generateHashKey(['GET', END_POINT]),
      duration: 5000,
    };

    memoizeAsync(config, (data: IMessage) => setMessage(data));
  }, []);

  return (
    <div className={styles.container}>
      {message && <p>{message.message}</p>}
    </div>
  );
};

export default Playground;
