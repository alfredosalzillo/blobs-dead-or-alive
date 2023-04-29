import React from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

export type ButtonColor = 'primary' | 'accent';

export type ButtonProps = {
  children: React.ReactNode,
  color?: ButtonColor,
  fullWidth?: boolean,
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  fullWidth = false,
  className,
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    {...props}
    className={clsx(classes.root, {
      [classes.fullWidth]: fullWidth,
      [classes.primary]: color === 'primary',
      [classes.accent]: color === 'accent',
    }, className)}
  >
    {children}
  </button>
);

export default Button;
