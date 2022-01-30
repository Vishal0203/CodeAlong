import React from 'react';
import styles from './ResultTable.module.scss';

const ResultTable = ({ mapResult, filterResult, reduceResult }) => (
  <table border={1} width="100%" cellPadding={10} className={styles.table}>
    <thead>
      <tr>
        <th>Operation</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Array.map()</td>
        <td>{JSON.stringify(mapResult)}</td>
      </tr>
      <tr>
        <td>Array.filter()</td>
        <td>{JSON.stringify(filterResult)}</td>
      </tr>
      <tr>
        <td>Array.reduce()</td>
        <td>{JSON.stringify(reduceResult)}</td>
      </tr>
    </tbody>
  </table>
);

export default ResultTable;
