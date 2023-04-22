import React from 'react';
import clsx from 'clsx';
import classes from './Modal.module.scss';

export type ModalProps = {
  children: React.ReactNode,
  open?: boolean,
}
const Modal: React.FC<ModalProps> = ({
  children,
  open = false,
}) => (
  <div className={clsx(classes.backdrop, {
    [classes.open]: open,
  })}
  >
    <dialog className={classes.root} open={open}>
      {children}
    </dialog>
  </div>
);

export default Modal;
