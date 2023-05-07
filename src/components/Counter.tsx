import React from 'react';
import styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
