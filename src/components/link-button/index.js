import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const LinkButton = ({ onClick, className, children, ...restProps }) => (
  <a
    className={classNames(className, styles.linkButton)}
    href="/"
    {...restProps}
    onClick={(event) => {
      event.preventDefault();
      if (onClick) {
        onClick();
      }
    }}>
    {children}
  </a>
);

export default LinkButton;
