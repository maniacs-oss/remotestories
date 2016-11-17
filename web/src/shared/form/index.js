/* @flow */

import './styles.css';
import * as Forming from 'src/lib/forming';
import Box from 'src/shared/box';
import React from 'react';
import classNames from 'classnames';

export default class Form extends React.Component {
  el: Forming.Form;

  props : {
    children?: any,
    className?: string,
  };

  submit() {
    this.el.submit()
  }

  reset() {
    this.el.reset()
  }

  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <Forming.Form className={classNames('Form', className)} {...otherProps} ref={el => this.el = el}>
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

export class SubmitButton extends React.Component {
  props: {
    children?: any,
    text: ?any
  };

  el: HTMLButtonElement;

  render() {
    const { children, text } = this.props;

    return (
      <div className="Form-SubmitButton">
        <p className="Form-SubmitButton-text">
          {text}
        </p>

        <button className="Form-SubmitButton-button" ref={el => this.el = el}>
          {children}
        </button>
      </div>
    );
  }
}
