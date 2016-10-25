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

  static defaultProps = {
    focus: false,
  };

  componentDidMount() {
    if (!this.props.focus) return;
    focusFirstElement(this.el);
  }

  render() {
    const { focus: _, onSubmit: __, ...formProps } = this.props;

    return (
      <form {...formProps} onSubmit={this.handleSubmit} ref={el => this.el = el} />
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
