'use client';

import type { FC, ReactNode } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import ModalContext from './ModalContext';

export type ModalProviderProps = { children: ReactNode }
const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [state, setState] = useState<Record<string, unknown>>({});

  const open = useCallback(<T, >(name: string, options: T) => {
    setState((current) => ({
      ...current,
      [name]: options,
    }));
  }, []);

  const close = useCallback((name: string) => {
    setState((current) => ({
      ...current,
      [name]: null,
    }));
  }, []);

  const value = useMemo(() => ({
    open,
    close,
    state,
  }), [open, close, state]);

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
