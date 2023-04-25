import './globals.scss';
import React from 'react';
import { ModalProvider } from '@/plugins/modal-provider';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <main>
    <ModalProvider>
      {children}
    </ModalProvider>
  </main>
);
export default RootLayout;
