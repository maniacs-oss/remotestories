/* @flow */

import './styles.css';
import React from 'react';

type Props = {
  children?: any,
  title?: any,
};

export default function Submit({ children, title }: Props) {
  return (
    <div className="Box">
      {title && (
        <div className="Box-title">{title}</div>
      )}
      {children}
    </div>
  );
}
