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

  form: HTMLFormElement;

  static defaultProps = {
    focus: false,
  };

  componentDidMount() {
    if (!this.props.focus) return;
    focusFirstElement(this.form);
  }

  render() {
    const { focus: _, onSubmit: __, ...formProps } = this.props;

    return (
      <form {...formProps} onSubmit={this.handleSubmit} ref={form => this.form = form} />
    );
  }

  handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const { name, onSubmit } = this.props;
    if (!onSubmit) return;

    const values = elementValues(this.form);
    const wrappedValues = name ? { [`${ name }`]: values } : values;

    onSubmit(wrappedValues);
  };
}
