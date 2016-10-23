/* @flow */

import './styles.css';
import * as Forming from 'src/lib/forming';
import Box from 'src/shared/box';
import React from 'react';
import classNames from 'classnames';

export default class Form extends React.Component {
  props : {
    children?: any,
    className?: string,
  };

  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <Forming.Form className={classNames('Form', className)} {...otherProps}>
        <Box>
          {children}
        </Box>
      </Forming.Form>
    );
  }
}

export function Label({ children, className, ...otherProps }: { children?: any, className?: string }) {
  return (
    <label className={classNames('Form-Label', className)} {...otherProps}>
      {children}
    </label>
  );
}

export class Textarea extends React.Component {
  props: {
    className?: string,
  };

  el: HTMLTextAreaElement;

  render() {
    const { className: _, ...textareaProps } = this.props;
    const className = classNames('Form-Textarea', this.props.className);

    return (
      <textarea {...textareaProps} className={className} ref={el => this.el = el} />
    );
  }
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
