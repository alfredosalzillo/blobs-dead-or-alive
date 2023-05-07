import './globals.scss';
import React from 'react';

import AuthProvider from 'auth/AuthProvider';
import { ModalProvider } from '@/plugins/modal-provider';
import PWAController from '@/components/PWAController';
import OnlyLogged from '@/components/OnlyLogged';

import LoadingScreen from './LoadingScreen';
import SignInScreen from './SignInScreen';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <main>
    <AuthProvider>
      <ModalProvider>
        <OnlyLogged loading={<LoadingScreen />} fallback={<SignInScreen />}>
          {children}
        </OnlyLogged>
      </ModalProvider>
    </AuthProvider>
    <PWAController />
  </main>
);
export default RootLayout;
