"use client";

import type { ComponentType, FC, ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import ModalContext, { type ModalEntry } from "./ModalContext";

export type ModalProviderProps = { children: ReactNode };
const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalEntry[]>([]);

  const open = useCallback(
    <P,>(name: string, component: ComponentType<P>, props: P) => {
      setModals((current) => {
        const index = current.findIndex((m) => m.name === name);
        const newEntry = { name, component, props };
        if (index > -1) {
          const updated = [...current];
          updated[index] = newEntry;
          return updated;
        }
        return [...current, newEntry];
      });
    },
    [],
  );

  const close = useCallback((name: string) => {
    setModals((current) => current.filter((m) => m.name !== name));
  }, []);

  const value = useMemo(
    () => ({
      open,
      close,
      modals,
    }),
    [open, close, modals],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modals.map(({ name, component: Component, props }) => (
        <Component
          key={name}
          {...props}
          open={true}
          onClose={() => close(name)}
        />
      ))}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
