"use client";

import type { ComponentType } from "react";
import { createContext } from "react";

// biome-ignore lint/suspicious/noExplicitAny: allowed
export type ModalEntry<P = any> = {
  name: string;
  component: ComponentType<P>;
  props: P;
};

export type ModalContextValue = {
  modals: ModalEntry[];
  open<P>(name: string, component: ComponentType<P>, props: P): void;
  close(name: string): void;
};

const ModalContext = createContext<ModalContextValue>({
  modals: [],
  open: () => {
    throw new Error("ModalContext is not implemented");
  },
  close: () => {
    throw new Error("ModalContext is not implemented");
  },
});
export default ModalContext;
