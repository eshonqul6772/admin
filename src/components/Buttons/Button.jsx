import React, { cloneElement } from 'react';
import cx from 'classnames';

import classNames from './Button.module.scss';

const Button = ({ title, size = 'md', block, variant, type = 'button', disabled, onClick }) => {
  const superButton = {
    className: cx(
      classNames[`wrapper--size-${size}`],
      classNames.wrapper,
      classNames[`wrapper--variant-${variant}`],
      block && classNames[`wrapper--block`],
    ),
    onClick,
    disabled,
  };

  return cloneElement(<button type={type} />, superButton, title);
};

export default Button;
