import React from 'react';
import clsx from 'clsx';
import classes from './ActionButton.module.scss';

export type ActionButtonProps = {
  children: React.ReactNode,
  fullWidth?: boolean,
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const ActionButton: React.FC<ActionButtonProps> = ({
  children, fullWidth = false, className, ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    {...props}
    className={clsx(classes.root, {
      [classes.fullWidth]: fullWidth,
    }, className)}
  >
    {children}
  </button>
);

export default ActionButton;
