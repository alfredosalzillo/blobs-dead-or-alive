'use client';

import React, { useMemo } from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';

const useModalRoot = () => useMemo(() => {
  const node = document.getElementById('modal-root');
  if (node) {
    return node;
  }
  const newNode = document.createElement('div');
  newNode.id = 'modal-root';
  document.body.appendChild(newNode);
  return newNode;
}, []);

export type ModalProps = {
  children: React.ReactNode,
  open?: boolean,
}
const Modal: React.FC<ModalProps> = ({
  children,
  open = false,
}) => {
  const modalRoot = useModalRoot();
  return createPortal(
    <div className={clsx(classes.backdrop, {
      [classes.open]: open,
    })}
    >
      <dialog className={classes.root} open={open}>
        {children}
      </dialog>
    </div>,
    modalRoot,
  );
};

export default Modal;
