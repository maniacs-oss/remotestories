/* @flow */

import './styles.css';
import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: ?string,
  component?: any,
  variant?: ?string,
};

export const Headline = createTypography({
  fallbackComponent: 'span',
  baseClassName: 'Headline',
});

export const Text = createTypography({
  fallbackComponent: 'span',
  baseClassName: 'Text',
});

export const Paragraph = createTypography({
  fallbackComponent: 'p',
  baseClassName: 'Paragraph',
});

function createTypography({ baseClassName, fallbackComponent }: { baseClassName: string, fallbackComponent: string }) {
  return ({ className, component, variant, ...otherProps}: Props) => {
    const props = {
      className: classNames(baseClassName, `${ baseClassName }--${ variant || 'default' }`, className),
      ...otherProps,
    };

    return React.createElement(component || fallbackComponent, props);
  };
}
