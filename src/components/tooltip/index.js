import React from 'react';
import styles from './styles.module.scss';

const Tooltip = ({ children, text }) => (
  <span className={styles.tooltipContainer}>
    <div className={styles.tooltip}>
      {text}
    </div>
    {children}
  </span>
);

export default Tooltip;
