/* @flow */

import React from 'react';
import { elementValues, focusFirstElement } from './utils';

type OnSubmit = (values: Object) => any;

type Props = {
  children?: any,
  disabled: boolean,
  focus: boolean,
  name?: string,
  onSubmit?: OnSubmit,
};

type State = {
  isSubmitting: boolean,
};

const styles = {
  fieldset: {
    border: 'none',
    margin: 0,
    padding: 0,
  },
  submitButton: {
    display: 'none',
  },
};

export default class Form extends React.Component {
  props: Props;

  state: State = { isSubmitting: false };

  el: HTMLFormElement;

  submitButton: HTMLButtonElement;

  static defaultProps = {
    disabled: false,
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
    this.setState({ isSubmitting: false });
  }

  render() {
    const { children, disabled, focus: _, onSubmit: __, ...formProps } = this.props;
    const { isSubmitting } = this.state;

    return (
      <form {...formProps} onSubmit={this.handleSubmit} ref={el => this.el = el}>
        <fieldset disabled={disabled || isSubmitting} style={styles.fieldset}>
          {children}

          <button
            style={styles.submitButton}
            ref={submitButton => this.submitButton = submitButton} />
        </fieldset>
      </form>
    );
  }

  handleSubmit = (event: SyntheticEvent) => {
    const { name, onSubmit } = this.props;

    if (!onSubmit) {
      return;
    }

    event.preventDefault();

    const { isSubmitting } = this.state;

    if (isSubmitting) {
      return;
    }

    this.setState({ isSubmitting: true }, () => {
      const values = elementValues(this.el);
      const wrappedValues = name ? { [`${ name }`]: values } : values;

      onSubmit(wrappedValues);
    });
  };
}
