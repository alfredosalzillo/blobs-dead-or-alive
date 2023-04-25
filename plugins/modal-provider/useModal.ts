import { useContext, useMemo } from 'react';

import type { ModalContextValue } from './ModalContext';
import ModalContext from './ModalContext';

export type Modal<T> = {
  open(options?: T): void
  close(): void
  options?: T | null
  opened: boolean
}

type TypedContextValue = keyof ModalContextValue['state']

const useModal = <T = never>(name: TypedContextValue, defaultOptions?: T): Modal<T> => {
  const { state, open, close } = useContext(ModalContext);
  const currentState = state[name];
  return useMemo(
    () => ({
      open: (options = defaultOptions) => open?.(name, { ...defaultOptions, ...options }),
      close: () => close?.(name),
      options: currentState as T,
      opened: !!currentState,
    }),
    [currentState, defaultOptions, open, name, close],
  );
};

export default useModal;
