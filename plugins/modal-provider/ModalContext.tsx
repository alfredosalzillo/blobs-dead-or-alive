'use client';

import { createContext } from 'react';

export type ModalContextValue = {
  state: Record<string, unknown>
  open<T>(name: string, options: T): void
  close(name: string): void
}

const ModalContext = createContext<ModalContextValue>({
  state: {},
  open: () => {
    throw new Error('ModalContext is not implemented');
  },
  close: () => {
    throw new Error('ModalContext is not implemented');
  },
});
export default ModalContext;
