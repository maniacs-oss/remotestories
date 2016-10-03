/* @flow */

import './styles.css';
import Box from 'src/shared/box';
import React from 'react';
import classNames from 'classnames';

export default function Form({ children, className, ...otherProps }: { children?: any, className?: string }) {
  return (
    <form className={classNames('Form', className)} {...otherProps}>
      <Box>
        {children}
      </Box>
    </form>
  );
}

export function Label({ children, className, ...otherProps }: { children?: any, className?: string }) {
  return (
    <label className={classNames('Form-Label', className)} {...otherProps}>
      {children}
    </label>
  );
}

export function Textarea({ className, ...otherProps }: { className?: string }) {
  return <textarea className={classNames('Form-Textarea', className)} {...otherProps} />;
}

export function SubmitButton({ children, text }: { children?: any, text:? any }) {
  return (
    <div className="Form-SubmitButton">
      <p className="Form-SubmitButton-text">
        {text}
      </p>

      <button className="Form-SubmitButton-button">
        {children}
      </button>
    </div>
  );
}
