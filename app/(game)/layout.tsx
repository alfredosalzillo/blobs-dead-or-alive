import './globals.scss';
import React from 'react';

import AuthProvider from 'auth/AuthProvider';
import { ModalProvider } from '@/plugins/modal-provider';
import PWAController from '@/components/PWAController';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <main>
    <AuthProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </AuthProvider>
    <PWAController />
  </main>
);
export default RootLayout;
