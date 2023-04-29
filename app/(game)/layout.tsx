import './globals.scss';
import React from 'react';

import { ModalProvider } from '@/plugins/modal-provider';
import PWAController from '@/components/PWAController';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <main>
    <ModalProvider>
      {children}
    </ModalProvider>
    <PWAController />
  </main>
);
export default RootLayout;
