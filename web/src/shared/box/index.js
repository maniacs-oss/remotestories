/* @flow */

import './styles.css';
import React from 'react';
import classNames from 'classnames';

type Props = {
  children?: any,
  className?: string,
  title?: any,
};

export default function Submit({ children, className, title }: Props) {
  return (
    <div className={classNames('Box', className)}>
      {title && (
        <div className="Box-title">{title}</div>
      )}
      {children}
    </div>
  );
}
