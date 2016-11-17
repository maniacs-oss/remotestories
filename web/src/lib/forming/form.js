/* @flow */

import React from 'react';
import { elementValues, focusFirstElement } from './utils';

type Props = {
  children?: any,
  focus: boolean,
  name?: string,
  onSubmit?: (values: Object) => any,
};

export default class Form extends React.Component {
  props: Props;

  el: HTMLFormElement;
  submitButton: HTMLButtonElement;

  static defaultProps = {
    focus: false,
  };

  componentDidMount() {
    if (!this.props.focus) return;
    focusFirstElement(this.el);
  }

  submit() {
    this.submitButton.click();
  }

  reset() {
    this.el.reset();
  }

  render() {
    const { children, focus: _, onSubmit: __, ...formProps } = this.props;

    return (
      <form {...formProps} onSubmit={this.handleSubmit} ref={el => this.el = el}>
        {children}

        <button
          style={{ display: 'none' }}
          ref={button => this.submitButton = button} />
      </form>
    );
  }

  handleSubmit = (event: SyntheticEvent) => {
    const { name, onSubmit } = this.props;
    if (!onSubmit) return;

    event.preventDefault();

    const values = elementValues(this.el);
    const wrappedValues = name ? { [`${ name }`]: values } : values;

    onSubmit(wrappedValues);
  };
}
