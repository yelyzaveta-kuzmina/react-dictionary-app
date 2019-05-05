import React from 'react';
import classNames from 'classnames';

const Spinner = ({ className }) => (
  <i className={classNames('spin fa fa-spinner', className)}></i>
);

export default Spinner;
